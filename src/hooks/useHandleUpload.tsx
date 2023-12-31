import { useRef, useState } from "react";
import { http } from "../services/appService";
import { useMutation } from "react-query";
import useNotifications from "./useNotifications";
import { QueryClient } from "react-query";

const useHandleUpload = () => {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<any>(null);

  const { openNotifications } = useNotifications();
  const queryClient = new QueryClient();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    handleModalClose();
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setFile(null);
  }

  const ref = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  };

  const handleDragLeave = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    const uploadedFile = e.dataTransfer.files[0];
    handleFile(uploadedFile);
  };

  const handleFile = (uploadedFile: any) => {
    if (uploadedFile) {
      // Validate file type
      if (
        uploadedFile.type === "application/json" ||
        uploadedFile.type === "text/csv" ||
        uploadedFile.type === "application/vnd.ms-excel"
      ) {
        // File type is valid
        setFile(uploadedFile);

        // Perform additional checks for dimensions or file size if needed
        uploadService(uploadedFile);
      } else {
        // File type is not supported
        alert("Please upload a file of type XLS, CSV, or JSON.");
      }
    }
  };

  const handleInputChange = (e: any) => {
    const uploadedFile = e.target.files[0];
    handleFile(uploadedFile);
  };

  const handleUploadClick = () => {
    ref.current?.click();
  };

  const { isLoading, mutate, isSuccess, isError } = useMutation(
    (formItem: any) => {
      return http.post("/auth/import/Orders/", formItem, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    {
      onSuccess({ data }) {
        openNotifications({ type: "success" });
        queryClient.invalidateQueries({
          queryKey: ["fetchOrders"],
        });

        closeModal();
      },
      onError(err) {
        console.log("Querry error", err);
        openNotifications({ type: "error" });
      },
    }
  );

  const uploadService = (data: any) => {
    const formData = new FormData();
    formData.append("file", data);
    mutate(formData);
  };

  return {
    handleDragEnter,
    handleDragLeave,
    handleUploadClick,
    handleInputChange,
    handleDrop,
    file,
    inputRef: ref,
    isOpen,
    closeModal,
    openModal,
    isUploadLoading: isLoading,
    isUploadSuccess: isSuccess,
    isUploadError: isError,
  };
};

export default useHandleUpload;
