import { ACTION_TYPE } from './type';

export const actionUpdateInput = (id, value) => {
	return {
		type: ACTION_TYPE.UPDATE_INPUT,
		payload: {id, value}
	};
};
