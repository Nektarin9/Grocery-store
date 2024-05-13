import { getProduct } from '../bff/api';
import { ACTION_TYPE } from './type';
export const actionGetProduct = (productId) => (dispatch) =>
	getProduct(productId).then((product) => {
		dispatch({
			type: ACTION_TYPE.GET_PRODUCT,
			payload: product,
		});
	});
