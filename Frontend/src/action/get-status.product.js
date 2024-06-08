import { ACTION_TYPE } from './type';

export const actionUpdateStatusProduct = (str) => {
	return {
		type: ACTION_TYPE.STATUS_PRODUCT,
		payload: str,
	};
};
