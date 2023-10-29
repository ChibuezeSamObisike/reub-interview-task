import React from "react";
import ReactPaginate from "react-paginate";
import Icons from "../assets/svg";

const Pagination = ({
  page,
  total,
  perPage,
}: {
  page: number;
  total: number;
  perPage: number;
}) => {
  return (
    <div className='flex items-center justify-between py-4'>
      <p className='font-400 text-[#667085]'>
        Showing {page} to {total} of {perPage} items
      </p>
      <ReactPaginate
        breakLabel='...'
        nextLabel={<Icons.NextIcon />}
        className='flex items-center'
        pageClassName='flex items-center justify-center m-1 border-[1px] px-2 rounded-lg border-[#E4E7EC]'
        previousLinkClassName='flex items-center justify-center m-1 border-[1px] px-1 py-2 rounded-lg border-[#E4E7EC]'
        nextLinkClassName='flex items-center justify-center m-1 border-[1px] px-2 py-2 rounded-lg border-[#E4E7EC]'
        activeClassName='bg-[#101828] text-[#fff]'
        // onPageChange={handlePageClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={1}
        pageCount={Math.floor(perPage / total)}
        previousLabel={<Icons.PrevIcon />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
