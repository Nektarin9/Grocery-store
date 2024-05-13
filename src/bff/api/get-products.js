export const getProducts = () => {
	return fetch(`http://localhost:3005/products`)
		.then((loadedData) => loadedData.json())
		.then((result) => result);
};
