
import { addCategory } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionAddCategory = (data) => (dispatch) =>
	addCategory(data).then((category) => {
		dispatch({
			type: ACTION_TYPE.ADD_CATEGORY,
			payload: category,
		});
	});
