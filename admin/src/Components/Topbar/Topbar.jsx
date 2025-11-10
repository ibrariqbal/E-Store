import React from "react";
import { Bell, User, LogOut } from "lucide-react";

export default function Topbar({ onLogout }) {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold text-[#ff5252]">Dashboard Overview</h1>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer text-[#ff5252]" />
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="text-[#ff5252]" />
          <span className="text-gray-700 font-medium">Admin</span>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-1 bg-[#ff5252] text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
