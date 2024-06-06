import { authorization } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionAuthorization = (login, password) => (dispatch) =>
	authorization(login, password).then((data) => {
		dispatch({
			type: ACTION_TYPE.AUTHORIZATION,
			payload: data,
		});
	});
