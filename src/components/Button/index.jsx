/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";
import { ALLSONGS_ROUTE } from "../../constants/routes";
// import { useState } from "react";
// import { makeRequest } from "../../utils/request";
// import { GET_ALL_RECORDS } from "../../constants/apiEndpoints";

function Button() {
  //   const [data, setRecData] = useState();
  //   const [error, setError] = useState();
  const navigate = useNavigate();

  //   const handleGetRec = () => {
  //     makeRequest(GET_ALL_RECORDS, {})
  //       .then((response) => {
  //         setRecData(response);
  //       })
  //       .catch((e) => {
  //         setError(e.message);
  //       });
  //   };

  //   if (error) {
  //     return (
  //       <div className="blogDataError">
  //         <p>{error}</p>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <button
        className="button pill-shape"
        onClick={() => navigate(ALLSONGS_ROUTE)}
      >
        Sync
      </button>
    </div>
  );
}

export default Button;
