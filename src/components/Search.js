import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="space-y-3">
      <p className="text-lg">Search your queries related to this product</p>

      <div className="bg-neutral h-[61px] w-[491px] rounded-[2px] flex items-center justify-start p-4 gap-4">
        <BsSearch />
        <input
          type="text"
          className="bg-neutral outline-none"
          placeholder="Your questions"
        />
      </div>
    </div>
  );
};

export default Search;
