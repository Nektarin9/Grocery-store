import { transformProduct } from '../transformes';
export const updateProduct = (id, data) =>
	fetch(`http://localhost:4000/store/product/${id}`, {
		method: 'PUT',
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
		.then((loadedProduct) => loadedProduct && transformProduct(loadedProduct));
