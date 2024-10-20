// CategoryManagementPage.tsx

const productCategoryManagement = () => {
    const categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold">Category Management</h1>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Category Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="border p-2">{category.id}</td>
                <td className="border p-2">{category.name}</td>
                <td className="border p-2">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 bg-green-500 text-white p-2">Add Category</button>
      </div>
    );
  };
  
  export default productCategoryManagement;
  