export const getСategory = () => {
	return fetch(`http://localhost:3005/categories`)
		.then((loadedCategory) => loadedCategory.json())
		.then((loadedCategory) => loadedCategory)
};
