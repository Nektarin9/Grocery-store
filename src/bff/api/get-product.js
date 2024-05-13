import { transformProduct } from '../transformes';

export const getProduct = (productId) => {
	return fetch(`http://localhost:3005/products/${productId}`)
		.then((loadedData) => loadedData.json())
		.then((result) => result && transformProduct(result));

};
