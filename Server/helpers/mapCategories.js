module.exports = function (categories) {
  return {
    id: categories._id,
    category: categories.category,
    urlImg: categories.image_url,
  };
};
