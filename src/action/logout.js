import { ACTION_TYPE } from "./type"
import { logout } from "../bff/api"
export const actionLogout = () => {
	logout()
	return {
		type: ACTION_TYPE.LOGOUT
	}
}
