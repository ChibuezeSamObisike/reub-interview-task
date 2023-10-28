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

const Orders = () => {
  const {
    file,
    isOpen,
    closeModal,
    openModal,
    ref,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleInputChange,
    handleUploadClick,
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
      onSuccess({ data }) {
        //   console.log("Order daata", data.results);
        //  console.log("Orders arrange", createOrders(data?.results));
      },
      onError(err) {
        console.log("Be like say error don occur for fetch", err);
      },
    }
  );

  console.log("Orders pro max", createOrders(data?.data?.results));

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
            {ix?.payment_type?.type}
          </p>
          <Chip variant={ix?.payment_type?.status} />
        </div>
      ),
      status: <Chip variant={ix?.status} />,
      assigned: <p style={{ textTransform: "capitalize" }}>{ix?.assigned}</p>,
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
        handleDragEnter={handleDragEnter}
        file={file}
        handleInputChange={handleInputChange}
        handleUploadClick={handleUploadClick}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        isOpen={isOpen}
        ref={ref}
        closeModal={closeModal}
      />
      <Navbar />
      <div className='p-12 mt-[70px]'>
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
