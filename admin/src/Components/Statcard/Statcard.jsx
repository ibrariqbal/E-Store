import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-5 rounded-2xl shadow flex items-center "
    >
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-blue-600 text-3xl">{icon}</div>
    </motion.div>
  );
}
