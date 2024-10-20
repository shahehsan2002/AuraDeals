// import Link from "next/link";
// import React, { ReactNode } from "react";

// const Sidebar = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col items-center justify-center">
//         {/* Page content here */}
//         {children}
//       </div>
//       <div className="drawer-side ">
//         <label
//           htmlFor="my-drawer-2"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-fuchsia-100 text-base-content min-h-full w-80 p-4">
//           {/* Sidebar content here */}
//           <li className="bg-fuchsia-200 rounded mb-2">
//             <Link href="/">📍Home</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/userManagement">👤 User Management</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/userManagement">🖱️ Product Management</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/product-category-management">👤 Product Category Management</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/paymentManagement">👤 Payment Management</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/orderManagement">👤 Order Management</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import Link from "next/link";
import React, { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <div className="text-2xl font-semibold text-center text-pink-400 mb-8">
          📍 Dashboard
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">🏠</span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/userManagement"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">👤</span>
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/productManagement"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">📦</span>
              <span>Product Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/product-category-management"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">📂</span>
              <span>Product Categories</span>
            </Link>
          </li>
          <li>
            {/* <Link
              href="/dashboard/paymentManagement"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">💳</span>
              <span>Payment Management</span>
            </Link> */}
          </li>
          <li>
            <Link
              href="/dashboard/orderManagement"
              className="flex items-center p-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="mr-4 text-pink-400">🛒</span>
              <span>Order Management</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Page content here */}
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
