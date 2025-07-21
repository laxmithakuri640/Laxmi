import React, { useEffect, useState , useNavigate} from "react";
import "./Styles/Viewuser.css";

export default function Viewuser() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;
const navigator = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(value) ||
        u.username.toLowerCase().includes(value)
    );
    setFiltered(result);
    setPage(1);
  };

  const showDetails = (user) => {
   navigator("/userDetails/$(id)");
  };

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="viewuser-wrapper">
      <h2 className="viewuser-title">User List</h2>

      <input
        type="text"
        placeholder="Search name or username"
        value={search}
        onChange={handleSearch}
        className="viewuser-search"
      />

      <table className="viewuser-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="viewuser-btn" onClick={() => showDetails(user)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="viewuser-pagination">
        <button
          className="viewuser-btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="viewuser-page-text">
          Page {page} of {totalPages}
        </span>
        <button
          className="viewuser-btn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}