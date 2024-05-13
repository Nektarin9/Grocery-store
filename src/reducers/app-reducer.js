import { ACTION_TYPE } from '../action/type';

export const initialAppState = {
	inputCounter: 1
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

		default:
			return state;
	}
}
