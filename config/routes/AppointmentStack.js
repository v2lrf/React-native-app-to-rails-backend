import { createStackNavigator } from 'react-navigation';
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../App/components/appointments/Show';
// Vues


// Router
export const AppointmentStack = createStackNavigator(
  {
    Index: {
      screen: AppointmentsIndexScreen,
    },
    Show: {
      screen: AppointmentShow,
    },
  },
  // Default route
  {
    initialRouteName: 'Index',
  }
);