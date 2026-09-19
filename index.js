const express = require("express");

const app = express();

const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date()
  });
});


app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Mint Green Hoodie",
      price: 45,
      category: "Clothing"
    },
    {
      id: 2,
      name: "Mint Classic T-Shirt",
      price: 25,
      category: "Clothing"
    },
    {
      id: 3,
      name: "Mint Canvas Sneakers",
      price: 70,
      category: "Shoes"
    }
  ];

  res.json(products);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
