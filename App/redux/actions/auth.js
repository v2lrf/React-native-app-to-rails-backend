import { ON_SUCCESS_LOGIN, SET_BY_STORAGE, UPDATE_ACCESS_TOKEN } from "./types";

function authSuccess(success_datas, accessToken) {
	return {
	  type: ON_SUCCESS_LOGIN,
	  payload: {success_datas: success_datas, accessToken: accessToken, status: 200},
	}
}

function updateAccessToken(new_token) {
	return {
	  type: UPDATE_ACCESS_TOKEN,
	  payload: {new_token},
	}
}
export { authSuccess, updateAccessToken }

