// UserListPage.tsx

const UserManagement = () => {
    // Mock data for users (replace with real API data)
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold">User List</h1>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <button className="text-blue-500 ">✍️</button>
                  <button className="text-red-500 ml-2"> 🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserManagement;
  