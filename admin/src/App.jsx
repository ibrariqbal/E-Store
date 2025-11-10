import React, { useState } from "react";
import Login from "./Pages/Dashboard/Login";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import ProductManager from "./Components/ProductManager/ProductManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route
            path="/"
            element={<AdminDashboard onLogout={handleLogout} />}
          />
          <Route path="/add-new-products" element={<ProductManager />} />
        </Routes>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </Router>
  );
}

export default App;
