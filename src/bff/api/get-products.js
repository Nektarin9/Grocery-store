import { transformProduct } from '../transformes';

export const getProducts = () => {
	return fetch(`http://localhost:4000/store`)
		.then((loadedData) => loadedData.json())
		.then((loadedProducts) => {
			console.log(loadedProducts)
			return loadedProducts && loadedProducts.map(transformProduct)
		})
};
