export const initialGlobaltState = {
	allСategories: [],
	category : "Все продукты",
	allProducts: []
};

export const globalState = (state = initialGlobaltState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "catalog": {
			return {
				...state,
				allСategories: payload,
			};
		}
		case "getCategory": {
			return {
				...state,
				category: payload,
			};
		}

		case "allProducts": {
			return {
				...state,
				allProducts: payload,
			};
		}

		default:
			return state;
	}
}
