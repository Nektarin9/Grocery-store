import { ACTION_TYPE } from '../action/type';
import { ROLE } from '../constants';

export const initialUsersState = {
	users: { error: true },
	regError: true,
	roleId: ROLE.GUEST,
};

export const userReducer = (state = initialUsersState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.AUTHORIZATION: {
			return {
				...state,
				users: { ...payload },
			};
		}
		case ACTION_TYPE.LOGOUT: {
			return {
				...state,
				users: { ...initialUsersState.users },
			};
		}
		case ACTION_TYPE.REGIST_ERROR: {
			return {
				...state,
				regError: payload,
			};
		}

		default:
			return state;
	}
};
