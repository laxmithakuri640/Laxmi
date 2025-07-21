import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState(""); // 🆕 for input value

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/todos");
        setTodos(res.data.todos);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to fetch todos.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAdd = () => {
    const trimmed = newTodo.trim();
    if (!trimmed) return;

    const newItem = {
      id: Date.now(), // simple unique ID
      todo: trimmed,
      completed: false,
    };

    setTodos((prevTodos) => [newItem, ...prevTodos]);
    setNewTodo(""); // clear input
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    todoBox: {
      border: "2px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "10px",
      backgroundColor: "#f9f9f9",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    completed: {
      textDecoration: "line-through",
      color: "gray",
    },
    deleteButton: {
      backgroundColor: "crimson",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    addSection: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "8px",
      fontSize: "16px",
    },
    addButton: {
      backgroundColor: "green",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      <div style={styles.addSection}>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={handleAdd}>
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <div style={styles.todoBox} key={todo.id}>
          <span style={todo.completed ? styles.completed : {}}>
            {todo.todo}
          </span>
          <button style={styles.deleteButton} onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;