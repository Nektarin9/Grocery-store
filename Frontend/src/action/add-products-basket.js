import { ACTION_TYPE } from './type';

export const actionAddProductsBasket = (product) => {
	return {
		type: ACTION_TYPE.ADD_PRODUCT_BASKET,
		payload: product,
	};
};
