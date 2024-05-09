
import { ACTION_TYPE } from "./type"
export const setCategory = (str) =>{
	return {
		type: ACTION_TYPE.SET_CATEGORY,
		payload: str
	}
}
