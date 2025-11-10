import React from "react";
import Sidebar from '../../Components/Sidebar/Siderbar.jsx';
import Topbar from "../../Components/Topbar/Topbar.jsx";
import StatCard from "../../Components/Statcard/Statcard.jsx";
import { ShoppingCart, DollarSign, Users, BarChart2 } from "lucide-react";

export default function AdminDashboard({ onLogout }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar onLogout={onLogout} />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Sales" value="$25,430" icon={<DollarSign />} />
          <StatCard title="Orders" value="1,204" icon={<ShoppingCart />} />
          <StatCard title="Customers" value="876" icon={<Users />} />
          <StatCard title="Revenue Growth" value="12%" icon={<BarChart2 />} />
        </div>
      </div>
    </div>
  );
}
