import React, { useEffect, useState } from "react";

export default function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/fashion");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`http://localhost:5000/api/products/fashion/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return <p className="text-gray-500 text-center mt-10">Loading products...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="text-3xl font-bold text-[#ff5252] mb-6 text-center">
        Product List
      </h3>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
          <table className="min-w-full bg-white border-collapse text-center">
            <thead className="bg-[#ff5252]/20 text-[#ff5252] uppercase text-sm">
              <tr>
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Image</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Price</th>
                <th className="p-3 border-b">Category</th>
                <th className="p-3 border-b">Description</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={p.id || i}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">{i + 1}</td>

                  <td className="p-3 flex justify-center items-center">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                    )}
                  </td>

                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3 text-[#ff5252] font-bold">${p.price}</td>
                  <td className="p-3">{p.category || "N/A"}</td>
                  <td className="p-3 text-gray-600 max-w-xs truncate">{p.description || "N/A"}</td>

                  {/* Actions buttons perfectly centered */}
                  <td className="p-3 flex gap-2 justify-center items-center flex-wrap">
                    <button
                      onClick={() => onEdit(p)}
                      className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 whitespace-nowrap"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 whitespace-nowrap"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
