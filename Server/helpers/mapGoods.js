module.exports = function (goods) {
    return {
        id: goods._id,
		category: goods.category,
		title: goods.title,
		price: goods.price,
		quantity: goods.quantity,
		protein: goods.protein,
		fats: goods.fats,
		carbohydrates: goods.carbohydrates,
		calorie: goods.calorie,
		numberGrams: goods.number_grams,
		imageUrl: goods.image_url,
		content: goods.content,
    };
  };
  