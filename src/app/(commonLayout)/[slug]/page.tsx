import ProductImages from "@/app/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <h1>content</h1>
      </div>
    </div>
  );
};

export default SinglePage;
