import { combineReducers } from 'redux';
import Navigation from './navigation';
import Auth from './auth';

export default combineReducers({
  Navigation,
  Auth,
});