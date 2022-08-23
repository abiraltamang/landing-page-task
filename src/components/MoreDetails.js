import React, { useState } from "react";
import Specification from "./moredetails/Specification";
import Description from "./moredetails/Description";
import QnA from "./moredetails/QnA";
import Rating from "./moredetails/Ratings";
const MoreDetails = () => {
  const [page, setpage] = useState("specification");
  return (
    <div className="h-[250px]">
      <ul className="text-[24px] text-[#1E1E1E] flex items-center justify-center gap-32 mb-10 mt-16 border-b-2  border-neutral pb-3 ">
        <li
          className={` ${
            page === "description" ? "text-secondary" : ""
          } cursor-pointer`}
          onClick={() => setpage("description")}
        >
          Description
        </li>
        <li
          className={` ${
            page === "specification" ? "text-secondary" : ""
          } cursor-pointer`}
          onClick={() => setpage("specification")}
        >
          Specification
        </li>
        <li
          className={` ${
            page === "qna" ? "text-secondary" : ""
          } cursor-pointer`}
          onClick={() => setpage("qna")}
        >
          Questions/Answers
        </li>
        <li
          className={` ${
            page === "ratings" ? "text-secondary" : ""
          } cursor-pointer`}
          onClick={() => setpage("ratings")}
        >
          Ratings & Reviews
        </li>
      </ul>
      {page === "description" && <Description />}
      {page === "specification" && <Specification />}
      {page === "qna" && <QnA />}
      {page === "ratings" && <Rating />}
    </div>
  );
};

export default MoreDetails;
