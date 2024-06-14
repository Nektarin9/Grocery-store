import { changeProduct } from '../utils';
import { ACTION_TYPE } from '../action/type';

export const initialCatalogReducer = {
	allСategories: [],
	category: '',
	product: {},
	numberProducts: 0,
	allProducts: {},
};

export const catalogReducer = (state = initialCatalogReducer, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.GET_ALL_PRODUCTS: {
			return {
				...state,
				allProducts: payload,
			};
		}
		case ACTION_TYPE.UPDATE_PRODUCT: {
			return {
				...state,
				allProducts: [...changeProduct(state.allProducts, payload, 'UPDATE')],
			};
		}
		case ACTION_TYPE.DELETE_PRODUCT: {
			return {
				...state,
				allProducts: [...changeProduct(state.allProducts, payload, 'DELETE')],
			};
		}
		case ACTION_TYPE.ADD_PRODUCT: {
			return {
				...state,
				allProducts: [...changeProduct(state.allProducts, payload, 'ADD')],
			};
		}
		case ACTION_TYPE.CATEGORY_SIDE_MENU: {
			return {
				...state,
				allСategories: payload,
			};
		}
		case ACTION_TYPE.ADD_CATEGORY: {
			return {
				...state,
				allСategories: [...changeProduct(state.allСategories, payload, 'ADD')],
			};
		}
		case ACTION_TYPE.DELETE_CATEGORY: {
			return {
				...state,
				allСategories: [...changeProduct(state.allСategories, payload, 'DELETE')],
			};
		}
		case ACTION_TYPE.SET_CATEGORY: {
			return {
				...state,
				category: payload,
			};
		}

		case ACTION_TYPE.GET_PRODUCT: {
			return {
				...state,
				product: payload,
			};
		}
		case ACTION_TYPE.CLEAR_PRODUCT: {
			if (state.product?.id) {
				for (let key in state.product) {
					delete state.product[key];
				}
			}
			return {
				...state,
			};
		}

		default:
			return state;
	}
};
