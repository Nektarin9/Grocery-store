const express = require('express');
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {
	getProducts,
	getProduct,
	addProducts,
	deleteProducts,
	updateProduct,
} = require('./contoller/products');
const { getCategories, addCategory, deleteCategory } = require('./contoller/categories');

const port = 4000;
const app = express();

app.use(
	cors({
		origin: true,
	}),
);

app.use(bodyParser.json());

/* Статика index.html */

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* Товары */

app.get('/store', async (req, res) => {
	const Products = await getProducts();
	res.send(Products);
});

app.get('/store/product/:id', async (req, res) => {
	const id = req.params.id;
	const Products = await getProducts();
	const Product = await getProduct(id, Products);
	res.send(Product);
});


app.post('/store/products', async (req, res) => {
	const newProduct = await addProducts(req.body);
	res.send(newProduct);
});

app.delete('/store/product/:id', async (req, res) => {
	await deleteProducts(req.params.id);
	res.send(req.params.id)
});

app.put('/store/product/:id', async (req, res) => {
	const newProduct = await updateProduct(req.params.id, req.body);
	res.send(newProduct)
});

/* Категории товаров */
app.get('/store/categories', async (req, res) => {
	const Categories = await getCategories();
	res.send(Categories);
});

app.post('/store/categories', async (req, res) => {
	const newCategory = await addCategory(req.body)
	console.log(newCategory)
	res.send(newCategory)
});

app.delete('/store/categories/:id', async (req, res) => {
	await deleteCategory(req.params.id);
	res.send(req.params.id)
});




mongoose
	.connect(
		'mongodb+srv://Nektarin:6258210qwe@cluster0.tf5yuoy.mongodb.net/Store?retryWrites=true&w=majority&appName=Cluster0',
	)
	.then(async () => {
		app.listen(port, () => {
			console.log(chalk.green(`Server has been started on port ${port}...`));
		});
	});
