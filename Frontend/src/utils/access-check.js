import { ROLE } from '../constants';
export const accessCheck = (user, access) => {
	if (user?.user?.roleId === ROLE.ADMIN && access === 'ADMIN') {
		return true;
	} else if (user?.error && access === 'AUTHORRIZED') {
		return true;
	}
};
