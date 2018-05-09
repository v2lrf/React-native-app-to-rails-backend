import { ON_SUCCESS_LOGIN, SET_BY_STORAGE } from "./types";

function authSuccess(success_datas, accessToken) {
	return {
	  type: ON_SUCCESS_LOGIN,
	  payload: {success_datas: success_datas, accessToken: accessToken, status: 200},
	}
}

function setUserByStorage(lastState) {
	return {
	  type: SET_BY_STORAGE,
	  payload: {lastState},
	}
}
export { authSuccess, setUserByStorage }

