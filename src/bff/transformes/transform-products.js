export const transformProduct = (dbProducts) => {
	return {
		id: dbProducts.id,
		category: dbProducts.category,
		title: dbProducts.title,
		priсe: dbProducts.priсe,
		quantity: dbProducts.quantity,
		protein: dbProducts.protein,
		fats: dbProducts.fats,
		carbohydrates: dbProducts.carbohydrates,
		calorie: dbProducts.calorie,
		numberGrams: dbProducts.number_grams,
		imageUrl: dbProducts.image_url,
		content: dbProducts.content,
	};
};
