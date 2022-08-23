import React from "react";

const technical_details = [
  {
    name: "Item weight",
    value: "29 pounds",
  },
  {
    name: "Dimensions",
    value: "29 pounds",
  },
  {
    name: "Item Model number",
    value: "29 pounds",
  },
];

const Specification = () => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <div>
        <p>Technical Details</p>
        <div>
          {/* {technical_details.map((item, index) => { */}
          <div className="w-[582px] h-[50px] text-center mx-auto bg-neutral grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[0].name}</p>
            <p>{technical_details[0].value}</p>
          </div>
          <div className="w-[582px] h-[50px] text-center mx-auto  grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[1].name}</p>
            <p>{technical_details[1].value}</p>
          </div>
          <div className="w-[582px] h-[50px] text-center mx-auto bg-neutral grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[2].name}</p>
            <p>{technical_details[2].value}</p>
          </div>
          {/* })} */}
        </div>
      </div>
      <div>
        <p>Other Details</p>
        <div>
          <div className="w-[582px] h-[50px] text-center mx-auto bg-neutral grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[2].name}</p>
            <p>{technical_details[2].value}</p>
          </div>
          <div className="w-[582px] h-[50px] text-center mx-auto  grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[1].name}</p>
            <p>{technical_details[1].value}</p>
          </div>
          <div className="w-[582px] h-[50px] text-center mx-auto bg-neutral grid grid-cols-2 justify-items-start place-items-center pl-3">
            <p className="font-semibold">{technical_details[0].name}</p>
            <p>{technical_details[0].value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
