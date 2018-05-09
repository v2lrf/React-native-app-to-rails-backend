import { createDrawerNavigator } from 'react-navigation';
import RootScreen from '../../App/views/connected/RootScreen';
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';


// Router
export const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: RootScreen,
    },
    Appointments: {
      screen: AppointmentsIndexScreen,
    },
  },
  // Default route
  {
    initialRouteName: 'Home',
  }
);