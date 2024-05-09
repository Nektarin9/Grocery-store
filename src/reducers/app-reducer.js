
export const initialAppState = {
	users: []
};

export const appReducer = (state = initialAppState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "хз": {
			return {
				...state,
				users: payload,
			};
		}

		default:
			return state;
	}
}
