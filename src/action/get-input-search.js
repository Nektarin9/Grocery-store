import { ACTION_TYPE } from './type';

export const getInputSearch = (str) => {
	return {
		type: ACTION_TYPE.GET_INPUT_SEARCH,
		payload: str,
	};
};
