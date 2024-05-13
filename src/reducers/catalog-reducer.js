import { ACTION_TYPE } from '../action/type';

export const initialCatalogReducer = {
	allСategories: [],
	category: 'Все продукты',
	product: null,
	numberProducts: 0,
	productSearch: '',
	allProducts: [],
	/*
	loadingProducts: [],
	*/
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

		case ACTION_TYPE.CATEGORY_SIDE_MENU: {
			return {
				...state,
				allСategories: payload,
			};
		}
		case ACTION_TYPE.SET_CATEGORY: {
			return {
				...state,
				category: payload,
			};
		}

		case ACTION_TYPE.GET_INPUT_SEARCH: {
			return {
				...state,
				productSearch: payload,
			};
		}
		case ACTION_TYPE.GET_PRODUCT: {
			return {
				...state,
				product: payload,
			};
		}




			/*
		case ACTION_TYPE.GET_LOADING_PRODUCTS: {
			return {
				...state,
				loadingProducts: payload,
			};
		}
		*/
		default:
			return state;
	}
};
