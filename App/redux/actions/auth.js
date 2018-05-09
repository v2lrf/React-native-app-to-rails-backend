import { ON_SUCCESS_LOGIN } from "./types";

function authSuccess(sucess_datas) {
	return {
	  type: ON_SUCCESS_LOGIN,
	  payload: {sucess_datas},
	}
}
export { authSuccess }

