import { createStackNavigator } from 'react-navigation';
// Vues
import AppointmentsIndexScreen from '../../App/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../App/views/appointments/Show';
import AppointmentNew from '../../App/views/appointments/New';
import AppointmentEdit from '../../App/views/appointments/Edit';

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
    Edit: {
      screen: AppointmentEdit,
    },
  },
  // Default route
  {
    initialRouteName: 'Index',
  }
);