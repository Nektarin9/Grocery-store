import { addProduct } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionAddProduct = (data) => (dispatch) =>
	addProduct(data).then((product) => {
		dispatch({
			type: ACTION_TYPE.ADD_PRODUCT,
			payload: product,
		});
	});
