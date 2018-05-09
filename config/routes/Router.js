import { createSwitchNavigator } from 'react-navigation';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';


export default createSwitchNavigator(
  {
    // Connected users router
    App: AppStack,
    // Unconnected users router
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
