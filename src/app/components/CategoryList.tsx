// import Image from "next/image";
// import Link from "next/link";

// const CategoryList = () => {
//   return (
//     <div className="px-4 overflow-x-scroll">
//       <div className="flex gap-4 md:gap-8">
//         <Link href="/list?cat=test">
//           <div className="relative w-20 h-10 bg-primary rounded-md">
//             <Image
//               src="/product.png"
//               alt="product"
//               fill 
//               sizes="20vw"
//               className="object-cover rounded-md"
//             />
//           </div>
//           <h1 className="mt-8 font-light text-clip tracking-wide" >Category Name</h1>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    _id: "1",
    slug: "category-1",
    name: "Electronics",
    media: {
      mainMedia: {
        image: {
          url: "/cat1.png",
        },
      },
    },
  },
  {
    _id: "2",
    slug: "category-2",
    name: "Fashion",
    media: {
      mainMedia: {
        image: {
          url: "/cat2.png",
        },
      },
    },
  },
  {
    _id: "3",
    slug: "category-3",
    name: "Home & Kitchen",
    media: {
      mainMedia: {
        image: {
          url: "/cat3.png",
        },
      },
    },
  },
  {
    _id: "4",
    slug: "category-4",
    name: "Beauty & Health",
    media: {
      mainMedia: {
        image: {
          url: "/cat4.png",
        },
      },
    },
  },
  {
    _id: "5",
    slug: "category-5",
    name: "Sports & Outdoors",
    media: {
      mainMedia: {
        image: {
          url: "/cat5.png",
        },
      },
    },
  },
  {
    _id: "6",
    slug: "category-6",
    name: "Toys & Games",
    media: {
      mainMedia: {
        image: {
          url: "/cat6.png",
        },
      },
    },
  },
  {
    _id: "7",
    slug: "category-7",
    name: "Automotive",
    media: {
      mainMedia: {
        image: {
          url: "/cat7.png",
        },
      },
    },
  },
  {
    _id: "8",
    slug: "category-8",
    name: "Books & Stationery",
    media: {
      mainMedia: {
        image: {
          url: "/cat8.png",
        },
      },
    },
  },
];

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt={item.name}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
