export const getСategory = () => {
	return fetch(`http://localhost:3005/category`)
		.then((loadedData) => {
			return loadedData.json();
		})
		.then((result) => result);
};
