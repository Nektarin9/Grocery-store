import { changeCounterReducer } from '../utils';
import { MINUS, PLUS, INPUT } from '../constants';
import { ACTION_TYPE } from '../action/type';

export const initialbasketReducer = {
	productsBasket: [],
	updateInput: null,
};

export const basketReducer = (state = initialbasketReducer, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.ADD_PRODUCT_BASKET: {
			return {
				...state,
				productsBasket: [...state.productsBasket, payload],
			};
		}
		case ACTION_TYPE.UPDATE_INPUT_PLUS: {
			changeCounterReducer(state.productsBasket, payload, PLUS);
			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}
		case ACTION_TYPE.UPDATE_INPUT_MINUS: {
			changeCounterReducer(state.productsBasket, payload, MINUS);
			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}
		case ACTION_TYPE.UPDATE_INPUT: {
			console.log(payload);
			changeCounterReducer(state.productsBasket, payload, INPUT);

			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}

		default:
			return state;
	}
};
