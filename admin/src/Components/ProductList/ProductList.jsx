import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null); // For editing

  // Fetch products
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

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetch(`http://localhost:5000/api/products/fashion/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditSave = (updatedProduct) => {
    if (!updatedProduct) return setEditingProduct(null); // cancel
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  if (loading)
    return <p className="text-gray-500 text-center mt-10">Loading products...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="text-3xl font-bold text-[#ff5252] mb-6 text-center">
        Product List
      </h3>

      {editingProduct && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h4 className="text-xl font-bold mb-4 text-center text-[#ff5252]">
              Edit Product
            </h4>
            <input
              type="text"
              className="w-full border p-2 rounded mb-2"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
            />
            <input
              type="number"
              className="w-full border p-2 rounded mb-2"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full border p-2 rounded mb-2"
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, category: e.target.value })
              }
            />
            <textarea
              className="w-full border p-2 rounded mb-2"
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, description: e.target.value })
              }
            />
            <div className="flex justify-end gap-3 mt-2">
              <button
                className="bg-gray-400 px-4 py-1 rounded hover:bg-gray-500"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-rose-400"
                onClick={() => handleEditSave(editingProduct)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <td className="p-3" style={{ verticalAlign: "middle" }}>
                    {i + 1}
                  </td>
                  <td className="p-3" style={{ verticalAlign: "middle" }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-20 h-20 object-contain rounded-lg mx-auto"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto"></div>
                    )}
                  </td>
                  <td className="p-3 font-medium" style={{ verticalAlign: "middle" }}>
                    {p.name}
                  </td>
                  <td
                    className="p-3 text-[#ff5252] font-bold"
                    style={{ verticalAlign: "middle" }}
                  >
                    ${p.price}
                  </td>
                  <td className="p-3" style={{ verticalAlign: "middle" }}>
                    {p.category || "N/A"}
                  </td>
                  <td
                    className="p-3 text-gray-600 max-w-xs truncate"
                    style={{ verticalAlign: "middle" }}
                  >
                    {p.description || "N/A"}
                  </td>
                  <td className="p-3" style={{ verticalAlign: "middle" }}>
                    <div className="flex justify-center items-center gap-3 h-full">
                      <button
                        onClick={() => handleEditClick(p)}
                        className="bg-blue-600 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-rose-400 whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-red-600 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-red-700 whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
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
