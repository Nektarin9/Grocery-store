import { request } from '../utils';
import { ACTION_TYPE } from './type';

export const actionAuthorization = (login, password) => (dispatch) =>
	request('/login', 'POST', { login, password }).then((data) => {
		dispatch({
			type: ACTION_TYPE.AUTHORIZATION,
			payload: data,
		});
	});
