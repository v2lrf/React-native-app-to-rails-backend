import { createSwitchNavigator } from 'react-navigation';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import AuthLoadingScreen from '../../App/views/unconnected/AuthLoadingScreen';

export default createSwitchNavigator(
  {
    // Connected users router
    AuthLoading: AuthLoadingScreen,
    // Connected users router
    App: AppStack,
    // Unconnected users router
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
