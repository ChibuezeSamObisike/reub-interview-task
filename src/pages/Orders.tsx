import React, { useEffect } from "react";
import Tabs from "../components/Tabs";
import Icons from "../assets/svg";
import Input from "../components/Input";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import UploadModal from "../components/UploadModal";
import { useHandleUpload } from "../hooks";
import { useQuery } from "react-query";
import { http } from "../services/appService";

const Orders = () => {
  const { openModal, isOpen } = useHandleUpload();
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

  useQuery("fetchOrders", () => http.get("/orders").then((res) => res.data), {
    onSuccess({ data }) {
      console.log("Order daata", data);
    },
    onError(err) {
      console.log("Be like say error don occur for fetch", err);
    },
  });

  useEffect(() => {
    console.log("token oo", localStorage.getItem("token"));
  }, []);

  return (
    <>
      <UploadModal />
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

        <Table />
      </div>
    </>
  );
};

export default Orders;
