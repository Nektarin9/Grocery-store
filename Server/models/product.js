const mongoose = require('mongoose');
const ProductsSchema = mongoose.Schema({
	calorie: {
		type: String,
	},
	category: {
		type: String,
	},
	content: {
		type: String,
	},
	fats: {
		type: String,
	},
	image_url: {
		type: Array,
	},
	number_grams: {
		type: String,
	},
	price: {
		type: Number,
	},
	protein: {
		type: String,
	},
	carbohydrates: {
		type: String,
	},
	quantity: {
		type: String,
	},
	title: {
		type: String,
	},
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
