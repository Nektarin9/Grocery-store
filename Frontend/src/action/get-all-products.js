import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionGetAllProducts =
	(limit = 20, search = '', sortDirection = 'asc', category = '') =>
	(dispatch) =>
		request(
			`/products?_&limit=${limit}&search=${search}&sortDirection=${sortDirection}&category=${category}`,
		).then((products) => {
			dispatch({
				type: ACTION_TYPE.GET_ALL_PRODUCTS,
				payload: products.products,
			});
		});
