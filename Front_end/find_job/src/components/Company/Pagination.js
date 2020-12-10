import React from "react";

export const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, limit, totalCompanies } = pagination;
  const totalPages = Math.ceil(totalCompanies / limit);

  const handlePageChange = (newPage) => {
    // if(newPage <0){
    //     newPage = 0;
    // }
    onPageChange(newPage);
  };
  return (
    <div className="mt-3 mb-5">
      <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
        Prev
      </button>
      <button
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
