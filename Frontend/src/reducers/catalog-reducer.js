import { changeProduct, transformObject } from '../utils';
import { ACTION_TYPE } from '../action/type';

export const initialCatalogReducer = {
	allСategories: [],
	category: '',
	product: {},
	numberProducts: 0,
	loadingProducts: [],
};

export const catalogReducer = (state = initialCatalogReducer, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.GET_LOADING_PRODUCTS: {
			return {
				...state,
				loadingProducts: payload,
			};
		}
		case ACTION_TYPE.UPDATE_PRODUCT: {
			return {
				...state,
				loadingProducts: [
					...changeProduct(state.loadingProducts, payload, 'UPDATE'),
				],
			};
		}
		case ACTION_TYPE.DELETE_PRODUCT: {
			return {
				...state,
				loadingProducts: [
					...changeProduct(state.loadingProducts, payload, 'DELETE'),
				],
			};
		}
		case ACTION_TYPE.ADD_PRODUCT: {
			return {
				...state,
				loadingProducts: [
					...changeProduct(state.loadingProducts, payload, 'ADD'),
				],
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
			if (!payload.imageUrl.length) {
				payload.imageUrl = [
					{
						imgSrc: 'https://sun1-19.userapi.com/s/v1/ig2/HEYwyGgppTiSOFuM2vg1h6W2aNCCVC6rXoiL3rGwy8q7dM_E9kejkCi1pODwNE-eDrlyt4VEEzmD_sbeaBu9Qcbf.jpg?size=400x400&quality=95&crop=467,154,665,665&ava=1',
						target: true,
					},
				];
			} else {
				payload.imageUrl = transformObject(payload);
			}
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
