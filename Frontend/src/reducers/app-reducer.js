import { ACTION_TYPE } from '../action/type';

export const initialAppState = {
	inputCounter: 1,
	statusProduct: null,
	statusEditing: false
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

		default:
			return state;
	}
}
