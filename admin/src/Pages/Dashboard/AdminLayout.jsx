import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fixed left */}
      <Sidebar />

      {/* Main content area (Right side) */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* ✅ Topbar visible on every page */}
        <div className="sticky top-0 z-50 bg-white shadow">
          <Topbar />
        </div>

        {/* ✅ Page content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
