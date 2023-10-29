import React from "react";
import Tabs from "../components/Tabs";
import Icons from "../assets/svg";
import Input from "../components/Input";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import UploadModal from "../components/UploadModal";
import Chip from "../components/Chip";
import { useHandleUpload } from "../hooks";
import { useQuery } from "react-query";
import { http } from "../services/appService";
import { createOrders } from "../utils/middleware";
import Alert from "../components/Alert";

const Orders = () => {
  const {
    file,
    isOpen,
    closeModal,
    openModal,
    inputRef,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleInputChange,
    handleUploadClick,
    isUploadLoading,
    isUploadSuccess,
  } = useHandleUpload();

  const tabData = [
    {
      title: "Assigned",
      icon: Icons.AssignedIcon,
    },
    {
      title: "Status",
      icon: Icons.StatusIcon,
    },
    {
      title: "Select Dates",
      icon: Icons.CalendarIcon,
    },
    {
      title: "Create order",
      icon: Icons.CreateIcon,
      variant: "close",
      onClick: openModal,
    },
    {
      icon: Icons.ExportIcon,
    },
    {
      icon: Icons.ImportIcon,
    },
  ];

  const { data } = useQuery(
    "fetchOrders",
    () => http.get("/orders").then((res) => res.data),
    {
      onSuccess({ data }) {},
      onError(err) {
        console.log("Be like say error don occur for fetch", err);
      },
    }
  );

  const orderItemsBody = createOrders(data?.data?.results);

  const bodyRow = orderItemsBody?.map((ix: any) => {
    return {
      customer: (
        <div>
          <p className='font-[500]'>{ix?.customer?.name}</p>
          <p className='text-[#98A2B3]'>{ix?.customer?.id || "--"}</p>
        </div>
      ),
      date: ix?.date,
      amount: ix?.amount ? "₦" + ix?.amount : "--",
      payment_type: (
        <div className='flex flex-col align-left justify-start bg-yellow'>
          <p style={{ textTransform: "capitalize" }}>
            {ix?.payment_type?.type ?? "No payment"}
          </p>
          <Chip variant={ix?.payment_type?.status} />
        </div>
      ),
      status: <Chip variant={ix?.status} />,
      assigned: (
        <div className='flex items-center'>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "10px",
            }}
          >
            <img src={ix?.assigned?.profileUrl} alt='person-img' />
          </div>
          <p style={{ textTransform: "capitalize" }}>{ix?.assigned?.title}</p>
        </div>
      ),
      options: (
        <div className='cursor-pointer'>
          <Icons.OptionsIcon />
        </div>
      ),
    };
  });

  const headerTitle = [
    {
      title: "Customer",
      key: "customer",
    },
    {
      title: "Amount",
      key: "amount",
    },
    {
      title: "Date",
      key: "date",
    },
    {
      title: "Payment type",
      key: "payment_type",
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Assigned",
      key: "assigned",
    },
    {
      title: "Options",
      key: "options",
    },
  ];

  return (
    <>
      <UploadModal
        file={file}
        isOpen={isOpen}
        inputRef={inputRef}
        isLoading={isUploadLoading}
        handleDragEnter={handleDragEnter}
        handleInputChange={handleInputChange}
        handleUploadClick={handleUploadClick}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        closeModal={closeModal}
      />
      <Navbar />
      {true && <Alert variant='error' />}
      <div className='px-24 py-12 mt-[70px]'>
        <h1 className='text-3xl'>Orders</h1>
        <div className='flex items-center justify-between mt-4'>
          <div className='w-[30%]'>
            <Input
              startAdornment={<Icons.SearchIcon />}
              placeholder='Search for Customer Name'
            />
          </div>
          <div className='flex items-center justify-between'>
            {tabData.map((tabItem) => (
              <div className='mx-1'>
                <Tabs {...tabItem} onClick={tabItem?.onClick} />
              </div>
            ))}
          </div>
        </div>

        <Table headerTitle={headerTitle} tableBody={bodyRow} />
      </div>
    </>
  );
};

export default Orders;
