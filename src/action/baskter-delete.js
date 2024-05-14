import { ACTION_TYPE } from './type';

export const actionBasketDelete = (id) => {
	return {
		type: ACTION_TYPE.BASKET_DELETE,
		payload: {id}
	};
};
