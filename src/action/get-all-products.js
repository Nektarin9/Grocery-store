import { getProducts } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionGetAllProducts = () => (dispatch) =>
	getProducts().then((products) => {
		dispatch({
			type: ACTION_TYPE.GET_ALL_PRODUCTS,
			payload: products,
		});
	});
