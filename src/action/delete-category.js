import { deleteCategory } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionDeleteCategory = (id) => (dispatch) =>
	deleteCategory(id).then((category) => {
		dispatch({
			type: ACTION_TYPE.DELETE_CATEGORY,
			payload: category,
		});
	});
