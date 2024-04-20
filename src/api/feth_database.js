export const fethDatabase = (database) => {
	return fetch(`http://localhost:3005/${database}`)
		.then((loadedData) => {
			return loadedData.json();
		})
		.then((result) => result)
		.catch((error) => {
			console.error(error);
		});
};
