import { transformProduct } from '../transformes';

export const addProduct = (data) =>
	fetch('/products', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			category: data.changeCategory,
			title: data.changeTitle,
			price: data.changePrice,
			quantity: data.changeQuantity,
			protein: data.changeProtein,
			fats: data.changeFats,
			carbohydrates: data.changeCarbohydrates,
			calorie: data.changeCalorie,
			number_grams: data.changeGrams,
			image_url: data.changeInputUrl,
			content: data.changeContent,
		}),
	})
		.then((loadedProduct) => loadedProduct.json())
		.then((loadedProduct) => {

			return loadedProduct && transformProduct(loadedProduct)}
		);
