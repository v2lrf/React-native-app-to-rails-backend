import { AppStack } from '../../../config/routes/AppStack';

const initialState = AppStack.router.getStateForAction(
  AppStack.router.getActionForPathAndParams("Home")
);
const navigation = (state = initialState, action) => {
  const newState = AppStack.router.getStateForAction(action, state);
  return newState || state;
};

export default navigation;
