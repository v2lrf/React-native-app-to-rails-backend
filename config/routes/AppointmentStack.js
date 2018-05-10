import { createStackNavigator } from 'react-navigation';
// Vues
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../App/components/appointments/Show';

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