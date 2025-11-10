import React, { useState, useEffect } from "react";
import axios from "axios";

const Fashion = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/fashion");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container p-6">
      <h1 className="text-3xl font-bold text-[#ff5252] mb-6">Fashion Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between"
          >
            {/* Discount badge */}
            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute ml-2 mt-2">
                -{product.discount}%
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            
            <div className="flex items-center mb-2">
              <span className="text-[#ff5252] font-bold text-lg mr-2">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex justify-between mt-auto">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Buy Now
              </button>
              <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
