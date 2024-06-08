import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionDeleteCategory = (id) => (dispatch) =>
	request(`/categories/${id}`, 'DELETE').then(() => {
		dispatch({
			type: ACTION_TYPE.DELETE_CATEGORY,
			payload: id,
		});
	});
