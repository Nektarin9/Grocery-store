import { transformProduct } from '../transformes';

export const getProducts = () => {
	return fetch(`/store`)
		.then((loadedData) => loadedData.json())
		.then((loadedProducts) => {
			return loadedProducts && loadedProducts.map(transformProduct)
		})
};
