import React from "react";

const ProductImage = ({ image }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img src={image} width={593} height={593} alt="" />
      </div>
      <div className="flex gap-2">
        <img
          src={image}
          className="border-2 border-neutral"
          width={70}
          height={70}
          alt=""
        />
        <img
          src={image}
          className="border-2 border-neutral"
          width={70}
          height={70}
          alt=""
        />
        <img
          src={image}
          className="border-2 border-neutral"
          width={70}
          height={70}
          alt=""
        />
        <img
          src={image}
          className="border-2 border-neutral"
          width={70}
          height={70}
          alt=""
        />
        <img
          src={image}
          className="border-2 border-neutral"
          width={70}
          height={70}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductImage;
