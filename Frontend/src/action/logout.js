import { request } from '../utils';
import { ACTION_TYPE } from './type';
export const actionLogout = () => {
	request('/logout', 'POST');
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
