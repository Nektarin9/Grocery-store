const express = require("express");
const chalk = require("chalk");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authenticated = require("./middlewares/authenticated");
const hasRole = require("./middlewares/hasRole");
const ROLES = require("./constants/roles");
const {
  getProducts,
  getProduct,
  addProducts,
  deleteProducts,
  updateProduct,
} = require("./contoller/products");
const {
  getCategories,
  addCategory,
  deleteCategory,
} = require("./contoller/categories");
const mapUser = require("./helpers/mapUser");
const { register, login } = require("./contoller/user");
const mapCategories = require("./helpers/mapCategories");
const mapGoods = require("./helpers/mapGoods");

const port = 4000;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

/* Товары */

app.get("/store", async (req, res) => {
  const Products = await getProducts();
  res.send(Products.map((item) => mapGoods(item)));
});

/* Авторизация и регистрация */
app.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(req.body.login, req.body.password);

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: "Похоже такой пользователь уже существует" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.login, req.body.password);
    res.cookie("token", token, { httpOnly: true }).send({
      error: null,
      user: mapUser(user),
    });
  } catch (e) {
    res.send({ error: "Проверьте учетые данные" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Products = await getProducts();
    const Product = await getProduct(id, Products);
    res.send({ ...mapGoods(Product) });
  } catch (e) {
    res.send({ error: e });
  }
});

/* Категории товаров */
app.get("/categories", async (req, res) => {
  let Categories = await getCategories();
  res.send(Categories.map((item) => mapCategories(item)));
});

app.use(authenticated);

app.post("/products", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newProduct = await addProducts(req.body);
  res.send(mapGoods(newProduct));
});

app.delete("/product/:id/edit", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteProducts(req.params.id);
  res.send(req.params.id);
});

app.put("/product/:id/edit", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newProduct = await updateProduct(req.params.id, req.body);
  res.send(mapGoods(newProduct));
});

app.post("/categories", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newCategory = await addCategory(req.body);
  console.log(newCategory);
  res.send(mapCategories(newCategory));
});

app.delete("/categories/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteCategory(req.params.id);
  res.send(req.params.id);
});

mongoose
  .connect(
    "mongodb+srv://Nektarin:6258210qwe@cluster0.tf5yuoy.mongodb.net/Store?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    });
  });
