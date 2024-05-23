export const updateProduct = (id, data) => {
	console.log(data)
	fetch(`http://localhost:3005/products/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			category: data.changeCategory,
			title: data.changeTitle,
			priсe: data.changePrice,
			quantity: data.changeQuantity,
			protein: data.changeProtein,
			fats: data.changeFats,
			carbohydrates: data.changeCarbohydrates,
			calorie: data.changeCalorie,
			number_grams: data.changeNumberGrams,
			image_url: data.changeInputUrl,
			content: data.changeContent
		}),
	}).then((loadedProduct) => loadedProduct.json());
}
