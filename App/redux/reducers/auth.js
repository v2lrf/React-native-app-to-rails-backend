import { ON_SUCCESS_LOGIN } from '../actions/types';

const INITIAL_STATE = {
  connected: false,
  token: {},
  user: {}
};

const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SUCCESS_LOGIN:
    return state;
		default:
      return state;
  }
}

export default Auth;