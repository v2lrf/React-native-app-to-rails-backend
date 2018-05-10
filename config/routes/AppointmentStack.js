import { createStackNavigator } from 'react-navigation';
// Vues
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../App/views/appointments/Show';
import AppointmentNew from '../../App/views/appointments/New';


// Router
export const AppointmentStack = createStackNavigator(
  {
    Index: {
      screen: AppointmentsIndexScreen,
    },
    Show: {
      screen: AppointmentShow,
    },
    New: {
      screen: AppointmentNew,
    },
  },
  // Default route
  {
    initialRouteName: 'Index',
  }
);