import { createStackNavigator } from 'react-navigation';
import RootScreen from '../../App/views/connected/RootScreen';

// Router
export const AppStack = createStackNavigator(
  {
    Home: {
      screen: RootScreen,
    },
  },
  // Default route
  {
    initialRouteName: 'Home',
  }
);