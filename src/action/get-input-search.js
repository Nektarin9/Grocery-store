import { ACTION_TYPE } from './type';

export const actionGetInputSearch = (str) => {
	return {
		type: ACTION_TYPE.GET_INPUT_SEARCH,
		payload: str,
	};
};
