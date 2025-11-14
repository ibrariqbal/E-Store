import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Login from "./Pages/Dashboard/Login";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import ProductManager from "./Components/ProductManager/ProductManager";
import Sidebar from "./Components/Sidebar/Siderbar";
import Topbar from "./Components/Topbar/Topbar";
import ProductList from "./Components/ProductList/ProductList";

function AdminLayout({ onLogout }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Topbar onLogout={onLogout} />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet context={{ onLogout }} />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route element={<AdminLayout onLogout={handleLogout} />}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/add-new-products" element={<ProductManager />} />
            <Route path="/product-list" element={<ProductList/>}/>
          </Route>
        </Routes>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </Router>
  );
}

export default App;
