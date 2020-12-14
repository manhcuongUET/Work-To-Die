import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const LoadingIndicator = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "250px" }}
    >
      <FontAwesomeIcon icon={faSpinner} spin size="2x"/>
      
    </div>
  );
};

export const LoadingSign = (props) => {
  return (
    <div className="my-3 mx-auto d-flex flex-column align-items-center">
      <FontAwesomeIcon icon={faSpinner} spin/>
      <p>{props.text}</p>
    </div>
  );
};
