import { ACTION_TYPE } from './type';

export const actionUpdateInputPlus = (id) => {
	return {
		type: ACTION_TYPE.UPDATE_INPUT_PLUS,
		payload: {id}
	};
};
