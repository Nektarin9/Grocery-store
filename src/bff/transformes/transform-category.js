export const transformCategory = (dbCategory) => ({
	id: dbCategory._id,
	category: dbCategory.category,
	urlImg: dbCategory.image_url,
});
