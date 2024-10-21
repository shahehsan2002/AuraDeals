// // ProductListPage.tsx
// 'use client';
// import React, { useState } from 'react';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', price: 100, stock: 50 },
//     { id: 2, name: 'Product 2', price: 200, stock: 30 },
//   ]);

//   // Handle edit product
//   const handleEdit = (id: number) => {
//     alert(`Edit product with ID: ${id}`);
//   };

//   // Handle delete product
//   const handleDelete = (id: number) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   // Handle adding a new product
//   const handleAddProduct = () => {
//     const newProduct = { id: products.length + 1, name: 'New Product', price: 150, stock: 40 };
//     setProducts([...products, newProduct]);
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Product List</h1>
//       <table className="w-full mt-4 border-collapse">
//         <thead>
//           <tr>
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Stock</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border p-2">{product.id}</td>
//               <td className="border p-2">{product.name}</td>
//               <td className="border p-2">${product.price}</td>
//               <td className="border p-2">{product.stock}</td>
//               <td className="border p-2">
//                 <button className="text-blue-500" onClick={() => handleEdit(product.id)}>Edit</button>
//                 <button className="text-red-500 ml-2" onClick={() => handleDelete(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="mt-4 bg-green-500 text-white p-2" onClick={handleAddProduct}>Add Product</button>
//     </div>
//   );
// };

// export default ProductManagement;

'use client';

import React, { useState, useEffect } from 'react';

// Mock product data (Fake JSON data)
const fakeProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 120,
    discountedPrice: 99,
    stock: 50,
    description: 'High-quality wireless headphones with noise-canceling technology.',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1606312619375-f531b6905f1b?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1615376713644-2ab23de6bc09?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60',
    ],
    customizations: { size: 'Medium', color: 'Black' },
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 200,
    discountedPrice: 150,
    stock: 100,
    description: 'Stylish smart watch with health monitoring features.',
    category: 'Wearable Tech',
    images: [
      'https://images.unsplash.com/photo-1589909357414-5f7fa3f2f5a6?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1572081086656-b7dcd8f8a4ef?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1574163203775-0f759b5d31a0?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1603052875812-918517487910?w=500&auto=format&fit=crop&q=60',
    ],
    customizations: { size: 'Adjustable', color: 'Silver' },
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 50,
    discountedPrice: 40,
    stock: 150,
    description: 'Ergonomic gaming mouse with customizable RGB lighting.',
    category: 'Computer Accessories',
    images: [
      'https://images.unsplash.com/photo-1602075432293-3a51db167237?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581952973348-4ae3c92a59d0?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581952622857-bf949e518e96?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581952622857-bf949e518e96?w=500&auto=format&fit=crop&q=60',
    ],
    customizations: { size: 'One Size', color: 'Black' },
  },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(fakeProducts); // Use fake data
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: '',
    price: 0,
    discountedPrice: 0,
    stock: 0,
    description: '',
    category: '',
    images: ['', '', '', ''], // Array to store 4 images
    customizations: { size: '', color: '' },
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const updatedImages = [...currentProduct.images];
    updatedImages[index] = e.target.value;
    setCurrentProduct({ ...currentProduct, images: updatedImages });
  };

  // Edit product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  // Save product (either new or edited)
  const handleSaveProduct = () => {
    if (isEditing) {
      const updatedProducts = products.map((p) =>
        p.id === currentProduct.id ? currentProduct : p
      );
      setProducts(updatedProducts);
      setIsEditing(false);
    } else {
      const newProduct = {
        ...currentProduct,
        id: products.length + 1, // Generate new ID
      };
      setProducts([...products, newProduct]);
    }
    setCurrentProduct({
      name: '',
      price: 0,
      discountedPrice: 0,
      stock: 0,
      description: '',
      category: '',
      images: ['', '', '', ''],
      customizations: { size: '', color: '' },
    });
  };

  // Delete product
  const handleDelete = (productId) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Display Products in Table (At the top) */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Products List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Stock</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Form (At the bottom) */}
      <h1 className="text-3xl font-bold mb-6 mt-10">
        {isEditing ? 'Edit Product' : 'Add New Product'}
      </h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={currentProduct.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={currentProduct.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="discountedPrice" className="block text-gray-700">Discounted Price</label>
          <input
            type="number"
            id="discountedPrice"
            name="discountedPrice"
            value={currentProduct.discountedPrice}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
        </div>

        {/* Image Inputs */}
        {currentProduct.images.map((image, index) => (
          <div key={index}>
            <label htmlFor={`image${index + 1}`} className="block text-gray-700">
              Product Image {index + 1} URL
            </label>
            <input
              type="text"
              id={`image${index + 1}`}
              value={image}
              onChange={(e) => handleImageChange(e, index)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              required={index === 0} // Make first image mandatory
            />
          </div>
        ))}

        <div>
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={currentProduct.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={currentProduct.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
        </div>

        <div className="flex space-x-4">
          <div>
            <label htmlFor="size" className="block text-gray-700">Size</label>
            <input
              type="text"
              id="size"
              name="customizations.size"
              value={currentProduct.customizations.size}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
          </div>

          <div>
            <label htmlFor="color" className="block text-gray-700">Color</label>
            <input
              type="text"
              id="color"
              name="customizations.color"
              value={currentProduct.customizations.color}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleSaveProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductManagement;
