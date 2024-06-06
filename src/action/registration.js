import { registration } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionRegistration = (login, password) => (dispatch) =>
	registration(login, password).then((data) => {
		dispatch({
			type: ACTION_TYPE.REGIST_ERROR,
			payload: data.error,
		});
	});
