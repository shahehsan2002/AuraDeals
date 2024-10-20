"use client";

import Image from "next/image";
import { useState } from "react";

const Images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0); // State to manage the selected image

  return (
    <div>
      {/* Main Image Display */}
      <div className="h-[500px] relative">
        <Image
          src={Images[index].url} // Correcting the src attribute to use the correct array
          alt="product"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      {/* Thumbnail Images to select from */}
      <div>
        <div className="flex justify-between gap-4 mt-8">
          {Images.map((img, i) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={img.id}
              onClick={() => setIndex(i)} // Fixing the syntax for the onClick handler
            >
              <Image
                src={img.url}
                alt="product thumbnail"
                fill
                sizes="50vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
