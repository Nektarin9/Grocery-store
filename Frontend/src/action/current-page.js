import { ACTION_TYPE } from './type';

export const actionCurrentPage = (number) => {
	return {
		type: ACTION_TYPE.CURRENT_PAGE,
		payload: number,
	};
};
