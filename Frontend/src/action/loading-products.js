import { ACTION_TYPE } from './type';

export const actionLoadingProducts = (status) => {
	return {
		type: ACTION_TYPE.IS_LOADING,
		payload: status,
	};
};
