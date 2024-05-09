import { getCatalog } from '../bff/api';
import { ACTION_TYPE } from './type';


export const getLoadingProducts = (page) => (dispatch) => {
	return getCatalog(`product?_limit=${page}`).then((loadingProducts) => {
		dispatch({
			type: ACTION_TYPE.GET_LOADING_PRODUCTS,
			payload: loadingProducts,
		});
	});
};
