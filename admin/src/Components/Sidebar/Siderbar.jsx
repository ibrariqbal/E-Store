import React, { useState } from "react";
import { Home, ShoppingBag, Users, Settings, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Products", icon: <ShoppingBag size={20} />, hasSubmenu: true },
    { name: "Customers", icon: <Users size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
      <ul className="space-y-2">
        {menu.map((item, i) => (
          <React.Fragment key={i}>
            <li
              className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition"
              onClick={() =>
                item.hasSubmenu && setOpenProductMenu(!openProductMenu)
              }
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>

              {item.hasSubmenu && <span>{openProductMenu ? "▲" : "▼"}</span>}
            </li>

            {/* Submenu */}
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
