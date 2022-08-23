import React, { useState, useEffect } from "react";
import AboutDetail from "./AboutDetail";
import OutlineLove from "./icons/OutlineLove";
import FilledLove from "./icons/FilledLove";
import ProductImage from "./resuable/ProductImage";
import Search from "./Search";
import PriceDetails from "./PriceDetails";
import axios from "axios";

const ProductDetails = () => {
  const [wishlist, setWishlist] = useState(false);

  const url = "https://fakestoreapi.com/products/1";
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  return (
    <div className="grid grid-cols-3 gap-32">
      <div className="col-span-1">
        <ProductImage image={product.image} />
      </div>
      <div className="col-span-2 space-y-5 mx-20 ">
        <div className=" border-b-2 border-neutral  pb-10 relative">
          <p className="font-heading text-[36px] leading-[50px]">
            {product.title}
            <span className="bg-black text-white text-xs rounded-lg p-2">
              #1 in chairs
            </span>
          </p>
          <div
            className="absolute right-0 flex text-pink w-[155px] cursor-pointer bg-[#F8E8EE] rounded-[17.5px] text-sm p-1 items-center justify-center gap-2"
            onClick={() => setWishlist(!wishlist)}
          >
            {!wishlist ? <OutlineLove /> : <FilledLove />}
            <p>Add to wishlist</p>
          </div>
        </div>
        <div className="pb-10 border-b-2 border-neutral">
          <p className="font-bold mb-2">
            options: <span className="font-normal">Cream Cushion</span>
          </p>
          <div className="flex gap-5">
            <img
              src={product.image}
              className="border-2  p-1 rounded-md hover:border-2 border-secondary"
              width={60}
              height={60}
              alt=""
            />

            <img
              src="/images/product.png"
              className="border-2 border-neutral p-1 rounded-md hover:border-2 hover:border-secondary"
              width={60}
              height={60}
              alt=""
            />
            <img
              src="/images/product.png"
              className="border-2 border-neutral p-1 rounded-md hover:border-2 hover:border-secondary"
              width={60}
              height={60}
              alt=""
            />
            <img
              src="/images/product.png"
              className="border-2 border-neutral p-1 rounded-md hover:border-2 hover:border-secondary"
              width={60}
              height={60}
              alt=""
            />
            <img
              src="/images/product.png"
              className="border-2 border-neutral p-1 rounded-md hover:border-2 hover:border-secondary"
              width={60}
              height={60}
              alt=""
            />
          </div>
        </div>
        <PriceDetails />
        <AboutDetail />
        <Search />
      </div>
    </div>
  );
};

export default ProductDetails;
