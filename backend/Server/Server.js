const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

// Dummy DB
let fashionProducts = [
  {
    id: 1,
    name: "Red Dress",
    price: 50,
    category: "Fashion",
    description: "Stylish red evening dress.",
    image:
      "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=1024x1024&w=is&k=20&c=7Uv2GcAUuGaKLk6pQ8Ky-sgT0-ptlsK9NWDNzpk9euI=",
  },
];

let electronicsProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 300,
    category: "Electronics",
    description: "Latest model smartphone.",
    image:
      "https://media.istockphoto.com/id/1209832452/photo/smartphone.jpg?s=1024x1024&w=is&k=20&c=kXecpzzquXQ0WIP3IZz2wSro-4P4C4xZy5tWyIQ33Eo=",
  },
];

// ------------------- Fashion API -------------------

// Get All
app.get("/api/products/fashion", (req, res) => {
  res.json(fashionProducts);
});

// Add New Product
app.post("/api/products/fashion", upload.single("image"), (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const image = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required." });
    }

    const newProduct = {
      id: fashionProducts.length + 1,
      name,
      price: Number(price),
      category,
      description,
      image,
    };

    fashionProducts.push(newProduct);
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete
app.delete("/api/products/fashion/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fashionProducts = fashionProducts.filter((p) => p.id !== id);
  res.json({ message: "Product deleted" });
});

// Update
app.put("/api/products/fashion/:id", upload.single("image"), (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = fashionProducts.findIndex((p) => p.id === id);

  if (productIndex === -1)
    return res.status(404).json({ error: "Product not found" });

  const { name, price, category, description } = req.body;
  let existing = fashionProducts[productIndex];
  let image = existing.image;

  if (req.file) {
    image = `http://localhost:5000/uploads/${req.file.filename}`;
  }

  const updatedProduct = {
    ...existing,
    name: name || existing.name,
    price: price ? Number(price) : existing.price,
    category: category || existing.category,
    description: description || existing.description,
    image: image,
  };

  fashionProducts[productIndex] = updatedProduct;
  res.json(updatedProduct);
});

// ------------------- Electronics API -------------------

// Get All
app.get("/api/products/electronics", (req, res) => {
  res.json(electronicsProducts);
});

// Add New Product
app.post("/api/products/electronics", upload.single("image"), (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const image = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required." });
    }

    const newProduct = {
      id: electronicsProducts.length + 1,
      name,
      price: Number(price),
      category,
      description,
      image,
    };

    electronicsProducts.push(newProduct);
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete
app.delete("/api/products/electronics/:id", (req, res) => {
  const id = parseInt(req.params.id);
  electronicsProducts = electronicsProducts.filter((p) => p.id !== id);
  res.json({ message: "Product deleted" });
});

// Update
app.put("/api/products/electronics/:id", upload.single("image"), (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = electronicsProducts.findIndex((p) => p.id === id);

  if (productIndex === -1)
    return res.status(404).json({ error: "Product not found" });

  const { name, price, category, description } = req.body;
  let existing = electronicsProducts[productIndex];
  let image = existing.image;

  if (req.file) {
    image = `http://localhost:5000/uploads/${req.file.filename}`;
  }

  const updatedProduct = {
    ...existing,
    name: name || existing.name,
    price: price ? Number(price) : existing.price,
    category: category || existing.category,
    description: description || existing.description,
    image: image,
  };

  electronicsProducts[productIndex] = updatedProduct;
  res.json(updatedProduct);
});

// ------------------- Server -------------------
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
