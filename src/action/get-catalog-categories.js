import { getСategory } from '../bff/api';
import { ACTION_TYPE } from './type';
export const actionGetСatalogСategories = () => (dispatch) =>
	getСategory().then((catalog) => {
		dispatch({
			type: ACTION_TYPE.CATEGORY_SIDE_MENU,
			payload: catalog,
		});
	});
