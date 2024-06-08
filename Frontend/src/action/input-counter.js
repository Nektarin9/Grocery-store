import { ACTION_TYPE } from './type';
export const actionInputCounter = (number) => {
	return {
		type: ACTION_TYPE.INPUT_COUNTER,
		payload: number,
	};
};
