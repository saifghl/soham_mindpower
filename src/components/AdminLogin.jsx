import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin login:", { email, password });
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Sign in</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          <div className="form-group">

            <input
              type="email"
              placeholder="Admin Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Admin Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
