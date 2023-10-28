import React from "react";
import Icons from "../assets/svg";
import Chip from "./Chip";

const Table = () => {
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
            <th align='left' className='p-4'>
              Customer
            </th>
            <th align='left'>Date</th>
            <th align='left'>Amount</th>
            <th align='left'>Payment type</th>
            <th align='left'>Status</th>
            <th>Assigned</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5, 6].map((x) => (
            <>
              <tr style={{ borderBottom: "1px solid #F2F4F7" }}>
                <td className='p-4'>
                  <div>
                    <p className='font-[500]'>Bamidele dara</p>
                    <p className='text-[#98A2B3]'>#0094348</p>
                  </div>
                </td>
                <td align='left'>09/10/2022</td>
                <td align='left'>₦34,800</td>
                <td align='left'>
                  <div className='flex flex-col align-left justify-start bg-yellow'>
                    <p>Cash</p>
                    <Chip />
                  </div>
                </td>
                <td align='left'>
                  <Chip variant='Completed' />
                </td>
                <td align='center'>Titilayo Ayebatari</td>
                <td align='center'>
                  <Icons.OptionsIcon />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
