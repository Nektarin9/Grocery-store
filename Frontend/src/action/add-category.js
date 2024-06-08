import { request } from "../utils";
import { ACTION_TYPE } from './type';

export const actionAddCategory = (data) => (dispatch) =>
	request('/categories', 'POST', {
		category: data.nameCategory,
		image_url: data.urlImg,
	}).then((category) => {
		dispatch({
			type: ACTION_TYPE.ADD_CATEGORY,
			payload: category,
		});
	});
