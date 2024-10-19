import Image from "next/image";
import Link from "next/link";

const productsData = [
  {
    _id: "1",
    name: "Product 1",
    price: 29.99,
    slug: "product-1",
    media: {
      mainMedia: { image: { url: "/product1.png" } },
      items: [{ image: { url: "/product1-alt.png" } }],
    },
    additionalInfoSections: [
      { title: "shortDesc", description: "This is product 1 short description." },
    ],
  },
  {
    _id: "2",
    name: "Product 2",
    price: 49.99,
    slug: "product-2",
    media: {
      mainMedia: { image: { url: "/product2.png" } },
      items: [{ image: { url: "/product2-alt.png" } }],
    },
    additionalInfoSections: [
      { title: "shortDesc", description: "This is product 2 short description." },
    ],
  },
  {
    _id: "3",
    name: "Product 3",
    price: 19.99,
    slug: "product-3",
    media: {
      mainMedia: { image: { url: "/product3.png" } },
      items: [{ image: { url: "/product3-alt.png" } }],
    },
    additionalInfoSections: [
      { title: "shortDesc", description: "This is product 3 short description." },
    ],
  },
  {
    _id: "4",
    name: "Product 4",
    price: 39.99,
    slug: "product-4",
    media: {
      mainMedia: { image: { url: "/product4.png" } },
      items: [{ image: { url: "/product4-alt.png" } }],
    },
    additionalInfoSections: [
      { title: "shortDesc", description: "This is product 4 short description." },
    ],
  },
];

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {productsData.map((product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt={product.name + " alt"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: product.additionalInfoSections.find(
                  (section) => section.title === "shortDesc"
                )?.description || "",
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
