
export const initialUsersState = {
	users: []
};

export const userState = (state = initialUsersState, action) => {
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
