const mongoose = require('mongoose');
const CategoriesSchema = mongoose.Schema({
	category: {
		type: String,
	},
	image_url: {
		type: String,
	}
});




const Categories = mongoose.model('categories', CategoriesSchema)

module.exports = Categories;
