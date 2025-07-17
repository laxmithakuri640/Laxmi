import React, { useEffect, useState } from "react";
import './UserList.css';
function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)) // ✅ fixed typo
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="user-container">
      <h2 className="Sec-f">User List</h2>
      <table className="user-table" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;