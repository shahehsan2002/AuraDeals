"use client";

import Image from "next/image";

const CartModal = () => {
  // Static cart data (placeholder)
  const cart = {
    lineItems: [
      {
        _id: "1",
        productName: { original: "Keyboard" },
        image: "https://images.unsplash.com/photo-1530623288743-52a89e908add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww", // Replace with a valid image path
        price: { amount: 29.99 },
        quantity: 2,
        availability: { status: "In Stock" },
      },
      
    ],
    subtotal: { amount: 29.99 },
  };

  const isLoading = false; // Static loading state

  const handleCheckout = () => {
    console.log("Proceed to checkout"); // No actual checkout functionality
  };

  const removeItem = (itemId: string) => {
    console.log(`Remove item with ID: ${itemId}`); // Static remove functionality
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems.length ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Product Image"
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.productName.original}</h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity > 1 && (
                          <div className="text-xs text-green-500">{item.quantity} x</div>
                        )}
                        ${item.price.amount}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.availability.status}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">${cart.subtotal.amount}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
