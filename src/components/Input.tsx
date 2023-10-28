import React, { ReactElement } from "react";

interface IProps extends Partial<HTMLInputElement> {
  startAdornment?: React.ReactNode | ReactElement;
  customStyle?: React.CSSProperties;
  onChange?: (e: any) => void;
}

const Input = ({
  startAdornment,
  placeholder,
  customStyle,
  onChange,
  name,
}: IProps) => {
  return (
    <div
      className='flex items-center p-2'
      style={{
        border: "1px solid #E4E7EC",
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        ...customStyle,
      }}
    >
      {startAdornment && <div className='mr-2'>{startAdornment}</div>}
      <input
        placeholder={placeholder}
        className='w-[100%]'
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
