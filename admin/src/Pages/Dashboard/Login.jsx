import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      onLogin(true);
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#ff5252]/10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-3xl p-10 w-96 border-t-8 border-[#ff5252]"
      >
        <h2 className="text-3xl font-bold text-center text-[#ff5252] mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border-2 border-[#ff5252]/40 rounded-lg p-3 focus:outline-none focus:border-[#ff5252] transition"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-[#ff5252]/40 rounded-lg p-3 focus:outline-none focus:border-[#ff5252] transition"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="curssor-pointer w-full bg-[#ff5252] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
