import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionGetAllProducts = () => (dispatch) =>
	request("/store").then((products) => {
		dispatch({
			type: ACTION_TYPE.GET_ALL_PRODUCTS,
			payload: products,
		});
	});
