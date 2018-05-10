import { AppStack } from '../../../config/routes/AppStack';

// we get the props of navigation and store them in redux to centralize everything
const initialState = AppStack.router.getStateForAction(
  AppStack.router.getActionForPathAndParams("Home")
);
const navigation = (state = initialState, action) => {
  const newState = AppStack.router.getStateForAction(action, state);
  return newState || state;
};

export default navigation;
