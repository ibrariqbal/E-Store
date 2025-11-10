const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let fashionProducts = [
  { id: 1, name: 'Red Dress', price: 50, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blue Jeans', price: 40, image: 'https://via.placeholder.com/150' },
];


app.get('/api/products/fashion', (req, res) => {
  res.json(fashionProducts);
});


app.post('/api/products/fashion', (req, res) => {
  const { name, price, image } = req.body;
  const newProduct = { id: fashionProducts.length + 1, name, price, image };
  fashionProducts.push(newProduct);
  res.json(newProduct);
});




const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
