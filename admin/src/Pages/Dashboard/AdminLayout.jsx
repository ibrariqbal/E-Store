import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Topbar />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
