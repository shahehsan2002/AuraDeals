// pages/admin/orders.tsx
'use client';
import { useState } from 'react';

// Mock data for orders (replace with real API data if needed)
const mockOrders = [
  {
    id: 1,
    user: 'John Doe',
    total: 150,
    status: 'Paid',
    date: '2024-10-20',
    paymentId: 'TXN12345',
  },
  {
    id: 2,
    user: 'Jane Doe',
    total: 90,
    status: 'Pending',
    date: '2024-10-21',
    paymentId: 'TXN12346',
  },
  {
    id: 3,
    user: 'Alice Smith',
    total: 200,
    status: 'Cancelled',
    date: '2024-10-19',
    paymentId: 'TXN12347',
  },
];

interface Order {
  id: number;
  user: string;
  total: number;
  status: string;
  date: string;
  paymentId: string;
}

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);

  // Search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = mockOrders.filter(
      (order) =>
        order.user.toLowerCase().includes(query) ||
        order.paymentId.toLowerCase().includes(query)
    );
    setFilteredOrders(filtered);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800">Order & Payment Management</h1>

      {/* Search Bar */}
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by user or payment ID..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border rounded-lg w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Orders Table */}
      <table className="mt-6 w-full table-auto bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">User</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Total</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Payment ID</th>
            <th className="py-2 px-4 text-center text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 transition duration-300 ease-in-out">
                <td className="py-2 px-4 text-sm text-gray-800">{order.id}</td>
                <td className="py-2 px-4 text-sm text-gray-800 font-medium">{order.user}</td>
                <td className="py-2 px-4 text-sm text-gray-800">${order.total}</td>
                <td className="py-2 px-4 text-sm text-gray-800">{order.status}</td>
                <td className="py-2 px-4 text-sm text-gray-800">{order.paymentId}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out">
                    View Details
                  </button>
                  {order.status !== 'Cancelled' && (
                    <button className="ml-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 focus:outline-none transition duration-200 ease-in-out">
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-4 text-center text-sm text-gray-500">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
