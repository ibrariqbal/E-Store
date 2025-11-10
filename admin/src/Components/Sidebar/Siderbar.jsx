import React, { useState } from "react";
import { Home, ShoppingBag, Users, Settings, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Products", icon: <ShoppingBag size={20} />, hasSubmenu: true },
    { name: "Customers", icon: <Users size={20} />, path: "/customers" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-64 bg-gray-900 text-white p-4">
      <Link to="/">
        <h2 className="text-2xl font-bold mb-8 text-center cursor-pointer">
          Admin Panel
        </h2>
      </Link>

      <ul className="space-y-2">
        {menu.map((item, i) => (
          <React.Fragment key={i}>
            {item.hasSubmenu ? (
              <li
                className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition"
                onClick={() =>
                  setOpenProductMenu(!openProductMenu)
                }
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span>{openProductMenu ? "▲" : "▼"}</span>
              </li>
            ) : (
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition">
                {item.icon}
                <Link to={item.path} className="flex-1">
                  {item.name}
                </Link>
              </li>
            )}

            {/* Submenu for Products */}
            {item.name === "Products" && openProductMenu && (
              <ul className="ml-10 mt-1 space-y-1">
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition">
                  <PlusCircle size={16} />
                  <Link to="/add-new-products">Add New Product</Link>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition">
                  <Link to="/product-list">Product List</Link>
                </li>
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
