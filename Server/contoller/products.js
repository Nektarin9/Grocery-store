const Products = require('../models/product');


async function getProducts() {
	const product = await Products.find();
	return product;
}
async function getProduct(id, Products) {
	let product = null;
	Products.forEach((item) => {
		if (id === item._id.toString()) {
			console.log(item);
			product = item;
		}
	});
	return product;
}
async function addProducts({
	category,
	title,
	price,
	quantity,
	protein,
	fats,
	carbohydrates,
	calorie,
	number_grams,
	image_url,
	content,
}) {
	const newProduct = await Products.create({
		category,
		title,
		price,
		quantity,
		protein,
		fats,
		carbohydrates,
		calorie,
		number_grams,
		image_url,
		content,
	});
	return newProduct;
}

async function deleteProducts(id) {
		// Удаление продукта с заданным ID
		await Products.deleteOne({ _id: id });
}

async function updateProduct(id, data) {
	const updatedProduct = {
		category: data.category,
		title: data.title,
		price: data.price,
		quantity: data.quantity,
		protein: data.protein,
		fats: data.fats,
		carbohydrates: data.carbohydrates,
		calorie: data.calorie,
		number_grams: data.number_grams,
		image_url: data.image_url,
		content: data.content,
		_id: id
	  };

	   await Products.updateOne(
		{ _id: id }, // Используем _id вместо id
		{ $set: updatedProduct }
	  );

	return updatedProduct;
}

module.exports = {
	getProducts,
	getProduct,
	addProducts,
	deleteProducts,
	updateProduct,
};
