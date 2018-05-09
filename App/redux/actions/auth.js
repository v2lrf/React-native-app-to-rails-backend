import { ON_SUCCESS_LOGIN } from "./types";

function authSuccess(success_datas, accessToken) {
	return {
	  type: ON_SUCCESS_LOGIN,
	  payload: {success_datas: success_datas, accessToken: accessToken, status: 200},
	}
}
export { authSuccess }

