import { request } from '../utils';
import { ACTION_TYPE } from './type';
export const actionGetСatalogСategories = () => (dispatch) =>
	request("/categories").then((catalog) => {
		dispatch({
			type: ACTION_TYPE.CATEGORY_SIDE_MENU,
			payload: catalog,
		});
	});
