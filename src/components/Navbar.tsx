import React from "react";
import Icons from "../assets/svg";
import avatar from "../assets/images/Avatar.jpg";

const Navbar = () => {
  const navLinks = [
    {
      title: "Dashboard",
    },
    {
      title: "Orders",
      active: true,
    },
    {
      title: "Drivers",
    },
    {
      title: "Tracking",
    },
    {
      title: "Assets",
    },
    {
      title: "Complaints",
    },
    {
      title: "Settings",
    },
  ];
  return (
    <div
      style={{
        borderBottom: "1px solid #f2f4f7",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
      }}
      className='flex items-center justify-between px-24 py-6 mb-12 bg-[#fff]'
    >
      <Icons.ReubecomLogo />

      <div className='flex items-center'>
        {navLinks.map((link) => (
          <p
            style={{
              ...(link.active && {
                backgroundColor: "#FFF0F0",
                color: "#D10121",
                borderRadius: "6px",
              }),
            }}
            className='mr-3 p-2 cursor-pointer'
          >
            {link.title}
          </p>
        ))}
      </div>

      <div className='flex items-center'>
        <Icons.CommentIcon />
        <div className='mx-4'>
          <Icons.NotificationsIcon />
        </div>
        <img src={avatar} alt='profile-icon' />
      </div>
    </div>
  );
};

export default Navbar;
