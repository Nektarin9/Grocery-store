export const getCatalog = (product) => {
	return fetch(`http://localhost:3005/${product}`)
		.then((loadedData) => {
			return loadedData.json();
		})
		.then((result) => result)
		.catch((error) => {
			console.error(error);
		});
};
