import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import BookTable from "./components/BookTable";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not logged in */}
        {!isLoggedIn && <Route path="*" element={<Navigate to="/login" />} />}
        
        {/* Login route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Show BookTable when logged in */}
        {isLoggedIn && <Route path="/booktable" element={<BookTable />} />}
      </Routes>
    </Router>
  );
}

export default App;
