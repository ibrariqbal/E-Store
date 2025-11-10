const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // <-- required for folder check

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve uploaded images

// ✅ Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Storage setup for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // upload folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

// Sample in-memory product list
let fashionProducts = [
  {
    id: 1,
    name: "Red Dress",
    price: 50,
    category: "Women",
    description: "Stylish red evening dress.",
    image:
      "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=1024x1024&w=is&k=20&c=7Uv2GcAUuGaKLk6pQ8Ky-sgT0-ptlsK9NWDNzpk9euI=",
  },
];

// ✅ Get all fashion products
app.get("/api/products/fashion", (req, res) => {
  res.json(fashionProducts);
});

// ✅ Add new product with image
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
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete product by id
app.delete("/api/products/fashion/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fashionProducts = fashionProducts.filter((p) => p.id !== id);
  res.json({ message: "Product deleted" });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
