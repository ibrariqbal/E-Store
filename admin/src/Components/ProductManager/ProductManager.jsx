import React, { useState, useEffect } from "react";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Fashion"); // default
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [filterCategory, setFilterCategory] = useState("Fashion"); // default filter

  // Fetch products based on selected category
  const fetchProducts = async (cat) => {
    try {
      const url = `http://localhost:5000/api/products/${cat.toLowerCase()}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // On initial load
  useEffect(() => {
    fetchProducts(filterCategory);
  }, [filterCategory]);

  // Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Please fill all required fields.");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    if (file) formData.append("image", file);

    try {
      await fetch(`http://localhost:5000/api/products/${category.toLowerCase()}`, {
        method: "POST",
        body: formData,
      });

      setName("");
      setPrice("");
      setCategory("Fashion");
      setDescription("");
      setFile(null);
      setPreview("");

      fetchProducts(filterCategory); // refresh for current filtered category
    } catch (err) {
      console.error("Add Product Error:", err);
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#ff5252] mb-8 text-center">
        All Product Manager
      </h2>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-white shadow-xl rounded-2xl p-6 mb-12 border border-gray-200"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Add New Product
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#ff5252] outline-none"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#ff5252] outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#ff5252] outline-none cursor-pointer"
          >
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded-lg w-full cursor-pointer"
          />
        </div>

        {preview && (
          <div className="mt-5 flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-xl shadow-md border"
            />
          </div>
        )}

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-lg w-full mt-4 focus:ring-2 focus:ring-[#ff5252] outline-none"
          rows="3"
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-full bg-[#ff5252] hover:bg-[#e04848] text-white font-semibold py-3 rounded-lg transition-all"
        >
          Add Product
        </button>
      </form>

      {/* Filter by Category */}
      <div className="mb-4 flex gap-3 items-center">
        <span className="font-semibold text-gray-700">Filter by Category:</span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-[#ff5252] outline-none cursor-pointer"
        >
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Product List */}
      <h3 className="text-2xl font-semibold text-[#ff5252] mb-3">Product List</h3>

      {products.length === 0 ? (
        <p className="text-gray-500">No products yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#ff5252]/10 text-[#ff5252] text-left">
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Image</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Price</th>
                <th className="p-3 border-b">Category</th>
                <th className="p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={p._id || i}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 border-b">{i + 1}</td>
                  <td className="p-3 border-b">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                    )}
                  </td>
                  <td className="p-3 border-b font-medium">{p.name}</td>
                  <td className="p-3 border-b">${p.price}</td>
                  <td className="p-3 border-b">{p.category}</td>
                  <td className="p-3 border-b text-gray-600">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
