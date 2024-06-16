import { ACTION_TYPE } from './type';
export const actionSlidertImg = (array) => {
	return {
		type: ACTION_TYPE.SLIDER_IMG,
		payload: array,
	};
};
