import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your actual login logic here (e.g., validate with backend)
    if (username === "admin" && password === "pass") {
      onLogin(true);
      navigate("/booktable");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "peachpuff",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          backgroundColor: "antiquewhite",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "black" }}>
          LOGIN
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              width: "93%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              backgroundColor: "aliceblue",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              width: "93%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              backgroundColor: "aliceblue",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              backgroundColor: "aliceblue",
              color: "0 4px 8px rgba(22, 20, 167, 0.79)",
              border: "1px solid black",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "lightblue")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "aliceblue")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
