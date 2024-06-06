import { transformProduct } from '../transformes';

export const getProduct = (productId) => {
	return fetch(`/product/${productId}`)
		.then((loadedData) => loadedData.json())
		.then((result) => {
			return result && transformProduct(result)
		});

};
