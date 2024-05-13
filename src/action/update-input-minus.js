import { ACTION_TYPE } from './type';

export const actionUpdateInputMinus = (id) => {
	return {
		type: ACTION_TYPE.UPDATE_INPUT_MINUS,
		payload: {id}
	};
};
