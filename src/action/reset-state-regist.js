import { ACTION_TYPE } from './type';
export const actionResetStateRegist = (state) => {
	return {
		type: ACTION_TYPE.REGIST_ERROR,
		payload: state,
	};
};
