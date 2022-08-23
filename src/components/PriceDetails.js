import React, { useState } from "react";

const PriceDetails = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(1400);

  const handleAddButton = () => {
    setCount(count + 1);
    setPrice(price + 1400);
  };
  const handleSubtractClick = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price - 1400);
    }
  };

  console.log(count);
  return (
    <div className="pb-10 border-b-2 border-neutral">
      <p className="line-through text-[#9C9C9C]">Nrs. 1,540</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[48px]">NRs. {price}</p>
          <div className="space-x-5">
            <span className="text-black bg-[#FEF4E6] p-1 rounded-md">
              10%off{" "}
            </span>
            <span className="text-secondary">You save: NRs. 140</span>
          </div>
        </div>
        <div>
          <p className="pb-2">Quantity</p>
          <div className="flex gap-5 items-center">
            <button
              className="h-[45px] w-[37px] bg-[#FEF4E6]"
              onClick={handleSubtractClick}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className="h-[45px] w-[37px] bg-[#FEF4E6]"
              onClick={handleAddButton}
            >
              +
            </button>
            <button className="h-[45px] w-[227px] bg-secondary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
