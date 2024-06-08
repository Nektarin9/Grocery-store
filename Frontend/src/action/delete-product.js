import { request } from "../utils";
import { ACTION_TYPE } from './type';

export const actionDeleteProduct = (id) => (dispatch) =>
	request(`/product/${id}/edit`, 'DELETE').then(() => {
		dispatch({
			type: ACTION_TYPE.DELETE_PRODUCT,
			payload: id,
		});
	});
