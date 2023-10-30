import React from "react";
import Icons from "../assets/svg";

const Alert = ({
  variant = "success",
  onClose,
  message = "Successfully uploaded",
}: {
  variant: string;
  onClose?: () => void;
  message?: string;
}) => {
  const alertVariant: { [key: string]: any } = {
    success: (
      <div
        style={{
          border: "1px solid #6CE9A6",
          borderRadius: "8px",
          width: "100%",
        }}
        className='bg-[#F6FEF9] text-[#027A48] px-3 py-4 flex items-center justify-between'
      >
        <div className='flex items-center'>
          <Icons.CheckIcon />
          <p className='ml-2'>{message}</p>
        </div>
        <div
          className='cursor-pointer'
          role='button'
          onClick={() => onClose?.()}
        >
          <Icons.CancelIcon />
        </div>
      </div>
    ),

    error: (
      <div
        style={{
          border: "1px solid #FDA29B",
          borderRadius: "8px",
          width: "100%",
        }}
        className='bg-[#FFFBFA] text-[#B42318] px-3 py-4 flex items-center justify-between'
      >
        <div className='flex items-center'>
          <Icons.ErrorWarningIcon />
          <p className='ml-2'>An Error Occur. Your Upload Failed</p>
        </div>
        <div
          className='cursor-pointer'
          role='button'
          onClick={() => onClose?.()}
        >
          <Icons.CancelRedIcon />
        </div>
      </div>
    ),
  };
  return <div>{alertVariant[variant]}</div>;
};

export default Alert;
