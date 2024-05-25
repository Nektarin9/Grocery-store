export const transformCategory = (dbCategory) => ({
	id: dbCategory.id,
	category: dbCategory.category,
	urlImg: dbCategory.image_url,
});
