import React from "react";

interface IProps {
  title?: string;
  icon: any;
  variant?: string;
  onClick?: VoidFunction;
}

const Tabs = ({ icon: Icon, title, variant, onClick }: IProps) => {
  if (variant === "close") {
    return (
      <div
        role='button'
        onClick={() => onClick?.()}
        style={{
          backgroundColor: "#D10121",
          color: "white",
          borderRadius: "8px",
          boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          width: "auto",
        }}
        className='px-2 py-2 flex items-center cursor-pointer'
      >
        <Icon />
        <p className='ml-2 text-sm font-medium text-[#fff]'>{title}</p>
      </div>
    );
  }
  return (
    <div
      style={{
        border: "1px solid #D0D5DD",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        width: "auto",
      }}
      className='px-2 py-2 flex items-center cursor-pointer justify-center'
    >
      <Icon />
      {title && (
        <p className='ml-2 text-sm font-medium text-[#667085]'>{title}</p>
      )}
    </div>
  );
};

export default Tabs;
