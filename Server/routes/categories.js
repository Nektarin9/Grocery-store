const express = require("express");

const hasRole = require("../middlewares/hasRole");

const ROLES = require("../constants/roles");
const mapCategories = require("../helpers/mapCategories");
const { deleteCategory, addCategory, getCategories } = require("../contoller/categories");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true })

router.get("/", async (req, res) => {
  let Categories = await getCategories();
  res.send(Categories.map((item) => mapCategories(item)));
});

router.post("/", authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
  const newCategory = await addCategory(req.body);
  res.send(mapCategories(newCategory));
});

router.delete("/:id", authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteCategory(req.params.id);
  res.send(req.params.id);
});

module.exports = router