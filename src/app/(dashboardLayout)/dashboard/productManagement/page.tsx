// ProductListPage.tsx
'use client';
import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100, stock: 50 },
    { id: 2, name: 'Product 2', price: 200, stock: 30 },
  ]);

  // Handle edit product
  const handleEdit = (id: number) => {
    alert(`Edit product with ID: ${id}`);
  };

  // Handle delete product
  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: 'New Product', price: 150, stock: 40 };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Product List</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">
                <button className="text-blue-500" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="text-red-500 ml-2" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-green-500 text-white p-2" onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductManagement;
