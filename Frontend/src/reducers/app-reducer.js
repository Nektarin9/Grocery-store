import { ACTION_TYPE } from '../action/type';

export const initialAppState = {
	inputCounter: 1,
	statusProduct: null,
	statusEditing: false,
	productSearch: '',
	btnSearch: false,
	currentPage: 20,
	sort: 'asc',

	sliderImg: [],
};

export const appReducer = (state = initialAppState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.INPUT_COUNTER: {
			return {
				...state,
				inputCounter: payload,
			};
		}
		case ACTION_TYPE.STATUS_PRODUCT: {
			return {
				...state,
				statusProduct: payload,
			};
		}
		case ACTION_TYPE.STATUS_EDITING: {
			return {
				...state,
				statusEditing: payload,
			};
		}
		case ACTION_TYPE.CURRENT_PAGE: {
			return {
				...state,
				currentPage: payload,
			};
		}
		case ACTION_TYPE.GET_INPUT_SEARCH: {
			return {
				...state,
				productSearch: payload,
			};
		}
		case ACTION_TYPE.BTN_SEARACH: {
			return {
				...state,
				btnSearch: !state.btnSearch,
			};
		}
		case ACTION_TYPE.SORT: {
			return {
				...state,
				sort: state.sort === 'asc' ? 'desc' : 'asc',
			};
		}

		case ACTION_TYPE.SLIDER_IMG: {
			return {
				...state,
				sliderImg: [...payload],
			};
		}

		default:
			return state;
	}
};
