import { getCatalog } from '../bff/api';
import { ACTION_TYPE } from './type';

export const getAllProducts = () => (dispatch) =>
	getCatalog('product').then((products) => {
		dispatch({
			type: ACTION_TYPE.GET_ALL_PRODUCTS,
			payload: products,
		});
	});
