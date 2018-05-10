import { createDrawerNavigator } from 'react-navigation';
import RootScreen from '../../App/views/connected/RootScreen';
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../App/components/appointments/Show';


// Router
export const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: RootScreen,
    },
    Appointments: {
      screen: AppointmentsIndexScreen,
    },
    Appointment: {
      screen: AppointmentShow,
    },
  },
  // Default route
  {
    initialRouteName: 'Home',
  }
);