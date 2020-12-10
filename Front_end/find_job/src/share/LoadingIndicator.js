import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export const LoadingIndicator = () => {
  return <div className="d-flex flex-column align-items-center justify-content-center" style={{ height:"250px"}}>
      <FontAwesomeIcon icon={faSpinner} spin/>
      <p>Searching...</p>
  </div>;
};
