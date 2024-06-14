const Categories = require("../models/categories");

async function getCategories() {
  const category = await Categories.find();
  return category;
}

async function addCategory({ category, image_url }) {
  const newCategory = await Categories.create({
    category,
    image_url,
  });
  return newCategory;
}

async function deleteCategory(id) {
  await Categories.deleteOne({ _id: id });
}

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
};
