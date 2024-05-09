import { getCatalog } from '../bff/api';
import { ACTION_TYPE } from './type';
export const getСatalogСategories = () => (dispatch) =>
	getCatalog('catalog').then((catalog) => {
		dispatch({
			type: ACTION_TYPE.CATEGORY_SIDE_MENU,
			payload: catalog,
		});
	});
