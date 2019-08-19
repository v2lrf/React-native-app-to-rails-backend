import {
  ON_SUCCESS_LOGIN,
  SET_BY_STORAGE,
  UPDATE_ACCESS_TOKEN
} from '../actions/types';
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist';

const INITIAL_STATE = {
  connected: false,
  token: {},
  user: {}
};
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SUCCESS_LOGIN:
      accessToken = action.payload.accessToken['access-token'];

      return Object.assign({}, state, {
        connected: true,
        token: Object.assign({}, state.token, {
          'access-token': accessToken,
          client: action.payload.success_datas.headers.client,
          uid: action.payload.success_datas.headers.uid
        }),
        user: action.payload.success_datas.data.data
      });

    case UPDATE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        token: Object.assign({}, state.token, {
          'access-token': action.payload.new_token
        })
      });
    // When open app set the last state
    case REHYDRATE:
      return { ...state, ...action.payload.Auth, rehydrated: true };

    case SET_BY_STORAGE:
      return action.payload.lastState;

    default:
      return state;
  }
};

export default Auth;
