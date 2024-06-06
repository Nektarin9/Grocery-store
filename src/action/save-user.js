import { ACTION_TYPE } from './type';

export const actionSaveUser = (user) => {
	return {
		type: ACTION_TYPE.AUTHORIZATION,
		payload: user
	};
};
