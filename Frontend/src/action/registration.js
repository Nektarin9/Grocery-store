import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionRegistration = (login, password) => (dispatch) =>
	request('/register', 'POST', { login, password }).then((data) => {
		dispatch({
			type: ACTION_TYPE.REGIST_ERROR,
			payload: data.error,
		});
	});
