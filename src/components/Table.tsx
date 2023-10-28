import React from "react";
import Icons from "../assets/svg";
import Chip from "./Chip";

const Table = ({ headerTitle, tableBody }: any) => {
  return (
    <div
      className='mt-6'
      style={{
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <table className='w-[100%]'>
        <thead>
          <tr className='bg-[#F9FAFB] text-[#667085]'>
            {headerTitle?.map((item: any) => (
              <th align='left' className='p-4'>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <>
            {tableBody &&
              tableBody?.map((item: any) => (
                <tr style={{ borderBottom: "1px solid #F2F4F7" }}>
                  {headerTitle?.map(({ key }: { key: string }) => (
                    <td className='p-4'>{item?.[key]}</td>
                  ))}
                </tr>
              ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
