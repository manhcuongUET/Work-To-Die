import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

export const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, limit, totalCompanies } = pagination;
  console.log(pagination)
  const totalPages = Math.ceil(totalCompanies / limit);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };
  return (
    <div style={{ position: "relative", height: "100px" }}>
      <div className="mt-3 mb-6" style={{ position: "absolute", right: "0px" }}>
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
    </div>
  );
};
