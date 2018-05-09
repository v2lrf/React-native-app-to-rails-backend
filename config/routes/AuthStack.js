import { createBottomTabNavigator } from 'react-navigation';
// Vues
import LoginScreen from '../../App/views/unconnected/LoginScreen';
import AboutScreen from '../../App/views/unconnected/AboutScreen';

// Router
export const AuthStack = createBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: true,
      showIcon: false
    }
  },
  // Default route
  {
    initialRouteName: 'Login',
  }
);