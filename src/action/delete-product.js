import { deleteProduct } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionDeleteProduct = (id) => (dispatch) =>
	deleteProduct(id).then(() => {
		dispatch({
			type: ACTION_TYPE.DELETE_PRODUCT,
			payload: id,
		});
	});
