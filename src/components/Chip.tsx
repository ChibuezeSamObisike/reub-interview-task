import React, { CSSProperties } from "react";

const Chip = ({ variant = "Prepaid" }: { variant?: string }) => {
  const defaultStyle: CSSProperties = {
    borderRadius: "16px",
    padding: "2px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  };

  const chipVariants: { [key: string]: any } = {
    payondelivery: (
      <div style={defaultStyle} className='bg-[#FFF6ED] text-[#C4320A]'>
        Pay on delivery
      </div>
    ),
    paid: (
      <div style={defaultStyle} className='text-[#175CD3] bg-[#EFF8FF]'>
        Credit
      </div>
    ),
    prepaid: (
      <div className='bg-[#FDF2FA] text-[#C11574]' style={defaultStyle}>
        Prepaid
      </div>
    ),
    completed: (
      <div style={defaultStyle} className='bg-[#ECFDF3] text-[#027A48]'>
        Completed
      </div>
    ),
    pending: (
      <div
        style={defaultStyle}
        className='bg-[#FFFAEB] text-[#B54708] flex items-center'
      >
        <p>Pending</p>
      </div>
    ),
  };
  return <div className='mt-1'>{chipVariants[variant.toLowerCase()]}</div>;
};

export default Chip;
