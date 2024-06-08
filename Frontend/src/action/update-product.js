import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionUpdateProduct = (id, data) => (dispatch) =>
	request(`/product/${id}/edit`, 'PUT', {
		category: data.changeCategory,
		title: data.changeTitle,
		price: data.changePrice,
		quantity: data.changeQuantity,
		protein: data.changeProtein,
		fats: data.changeFats,
		carbohydrates: data.changeCarbohydrates,
		calorie: data.changeCalorie,
		number_grams: data.changeGrams,
		image_url: data.changeInputUrl,
		content: data.changeContent,
	}).then((product) => {
		dispatch({
			type: ACTION_TYPE.UPDATE_PRODUCT,
			payload: product,
		});
	});
