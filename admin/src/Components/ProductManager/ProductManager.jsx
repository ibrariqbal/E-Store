import React, { useState, useEffect } from "react";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Fetch all fashion products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/fashion");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = { name, price: Number(price), category, description };

    await fetch("http://localhost:5000/api/products/fashion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    // Clear form
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");

    // Refresh product list
    fetchProducts();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#ff5252] mb-4">Add New Product</h2>

      <form onSubmit={handleAddProduct} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-[#ff5252] text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <h3 className="text-xl font-semibold text-[#ff5252] mb-2">Product List</h3>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <table className="min-w-full border bg-white rounded">
          <thead>
            <tr className="bg-[#ff5252]/10 text-[#ff5252]">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className="text-center">
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">${p.price}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
