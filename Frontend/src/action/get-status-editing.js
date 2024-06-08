import { ACTION_TYPE } from './type';

export const actionGetStatusEditing = (status) => {
	return {
		type: ACTION_TYPE.STATUS_EDITING,
		payload: status,
	};
};
