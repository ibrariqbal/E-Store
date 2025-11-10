import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Fashion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch fashion products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/fashion");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-[#ff5252] text-xl font-semibold">
        Loading fashion products...
      </div>
    );
  }

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white">
      <h1 className="text-4xl font-bold text-[#ff5252] mb-10 text-center">
        Fashion Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products found in this category.
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between border border-gray-100"
            >
              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-[#ff5252] text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                  -{product.discount}%
                </span>
              )}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-3">
                {product.category || "Fashion"}
              </p>

              {/* Price */}
              <div className="flex justify-center items-center mb-4">
                <span className="text-[#ff5252] font-bold text-lg mr-2">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
                  {product.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between gap-3 mt-auto">
                <button className="bg-[#ff5252] text-white w-1/2 py-2 rounded-lg hover:bg-[#e04848] transition">
                  Buy Now
                </button>
                <button className="border border-[#ff5252] text-[#ff5252] w-1/2 py-2 rounded-lg hover:bg-[#ff5252]/10 transition">
                  Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Fashion;
