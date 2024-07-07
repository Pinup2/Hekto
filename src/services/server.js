const express = require("express");
const jsonServer = require("json-server");
const fs = require("fs");

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);

// Middleware to calculate discounted price
app.use((req, res, next) => {
  if (req.method === "GET" && req.url.startsWith("/products")) {
    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const products = db.products.map((product) => ({
      ...product,
      discountedPrice: product.price * (1 - product.discountPercentage / 100),
    }));
    res.json(products);
  } else {
    next();
  }
});

app.use(router);

app.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
