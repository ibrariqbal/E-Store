import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#ff5252] mb-6">Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="min-w-full border bg-white rounded-xl">
          <thead>
            <tr className="bg-[#ff5252]/10 text-[#ff5252]">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p._id} className="text-center">
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">${p.price}</td>
                <td className="border p-2">{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
