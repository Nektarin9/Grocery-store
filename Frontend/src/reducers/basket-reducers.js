import { changeProductBasket } from '../utils';
import { MINUS, PLUS, INPUT, DELETE } from '../constants';
import { ACTION_TYPE } from '../action/type';

export const initialbasketReducer = {
	productsBasket: [],
	updateInput: null,
};

export const basketReducer = (state = initialbasketReducer, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.ADD_PRODUCT_BASKET: {
			if (Array.isArray(payload)) {
				return {
					...state,
					productsBasket: [...payload],
				};
			} else {
				return {
					...state,
					productsBasket: [...state.productsBasket, payload],
				};
			}
		}
		case ACTION_TYPE.UPDATE_INPUT_PLUS: {
			changeProductBasket(state.productsBasket, payload, PLUS);
			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}
		case ACTION_TYPE.UPDATE_INPUT_MINUS: {
			changeProductBasket(state.productsBasket, payload, MINUS);
			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}
		case ACTION_TYPE.UPDATE_INPUT: {
			changeProductBasket(state.productsBasket, payload, INPUT);

			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}
		case ACTION_TYPE.BASKET_DELETE: {
			changeProductBasket(state.productsBasket, payload, DELETE);

			return {
				...state,
				productsBasket: [...state.productsBasket],
			};
		}

		default:
			return state;
	}
};
