import { transformProduct } from '../transformes';

export const getProduct = (productId) => {
	return fetch(`http://localhost:4000/store/product/${productId}`)
		.then((loadedData) => loadedData.json())
		.then((result) => {
			return result && transformProduct(result)
		});

};
