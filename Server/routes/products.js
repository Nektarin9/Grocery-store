const express = require("express");

const authenticated = require("../middlewares/authenticated");
const hasRole = require("../middlewares/hasRole");

const ROLES = require("../constants/roles");
const {
  updateProduct,
  addProducts,
  deleteProducts,
  getProduct,
  getProducts,
} = require("../contoller/products");
const mapGoods = require("../helpers/mapGoods");

const router = express.Router({ mergeParams: true });

router.get("/products", async (req, res) => {
  const data = await getProducts(
    req.query.limit,
    req.query.search,
    req.query.sortBy,
    req.query.sortDirection,
    req.query.category
  );
  res.send(data);
});

router.post(
  "/products",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const newProduct = await addProducts(req.body);
    res.send(mapGoods(newProduct));
  }
);

router.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getProducts();
    const Product = await getProduct(id, data.allProducts);
    res.send(mapGoods(Product));
  } catch (e) {
    res.send({ error: e });
  }
});

router.delete(
  "/product/:id/edit",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    await deleteProducts(req.params.id);
    res.send(req.params.id);
  }
);

router.put(
  "/product/:id/edit",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const newProduct = await updateProduct(req.params.id, req.body);
    res.send(mapGoods(newProduct));
  }
);

module.exports = router;
