import { updateProduct } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionUpdateProduct = (id, data) => (dispatch) =>
	updateProduct(id, data).then((product) => {
		dispatch({
			type: ACTION_TYPE.UPDATE_PRODUCT,
			payload: product,
		});
	});
