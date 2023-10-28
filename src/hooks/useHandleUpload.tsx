import { useRef, useState } from "react";

const useHandleUpload = () => {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState(null);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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

  return {
    handleDragEnter,
    handleDragLeave,
    handleUploadClick,
    handleInputChange,
    handleDrop,
    file,
    ref,
    isOpen,
    closeModal,
    openModal,
  };
};

export default useHandleUpload;
