import { ACTION_TYPE } from '../action/type';

export const basketReducer = {
	quantityProducts: 0
};

export const catalogReducer = (state = basketReducer, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.GET_ALL_PRODUCTS: {
			return {
				...state,
				quantityProducts: payload,
			};
		}

		default:
			return state;
	}
};
