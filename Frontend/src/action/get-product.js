import { request } from "../utils";
import { ACTION_TYPE } from './type';
export const actionGetProduct = (productId) => (dispatch) =>
	request(`/products/${productId}`).then((product) => {
		dispatch({
			type: ACTION_TYPE.GET_PRODUCT,
			payload: product,
		});
	});
