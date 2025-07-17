import React, { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2",
      }}
    >
      <form
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "300px",
        }}
      >
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          {error.email && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>{error.email}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          {error.password && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>{error.password}</div>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}