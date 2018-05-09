import { ON_SUCCESS_LOGIN, SET_BY_STORAGE } from '../actions/types';

const INITIAL_STATE = {
  connected: false,
  token: {},
  user: {}
};
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SUCCESS_LOGIN:
      accessToken = action.payload.accessToken["access-token"];

      return Object.assign({}, state, {
        connected: true,
        token: Object.assign({}, state.token, {
          access_token: accessToken,
          client: action.payload.success_datas.headers.client,
          uid: action.payload.success_datas.headers.uid,
        }),
        user: action.payload.success_datas.data.data,
        });
    case SET_BY_STORAGE:
  return action.payload.lastState
		default:
      return state;
  }
}

export default Auth;