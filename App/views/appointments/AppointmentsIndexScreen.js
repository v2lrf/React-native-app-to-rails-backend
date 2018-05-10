import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Axios from 'axios';

import Auth from '../../redux/reducers/auth';
import { Url } from '../../../config/api/credentials';
import { updateAccessToken } from '../../redux/actions/auth';
import AppointmentCard from '../../components/appointments/Card';
import navigation from '../../redux/reducers/navigation';



class AppointmentsIndexScreen extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAppointments = this.fetchAppointments.bind(this);
    this.state = {
      appointments: [],
    }
    this.fetchAppointments();
  }

  static navigationOptions = {
    title: 'List of Appointments',
  };

  fetchAppointments() {
    var self = this;
    var accessToken = this.props.reduxState.Auth.token
    // Get user profile
    Axios.get(Url.appointments, {headers: Object.assign(Url.headers, accessToken)})
    .then(function (response) {
      if(response.headers["access-token"] != "") {
        self.props.updateAccessToken(response.headers["access-token"])
      }
      self.setState({
        appointments: response.data
      })
    })
    .catch(function (error) {
      console.log("ERROR DURING fecthAppointments", error);
    });
  }

  render() {
    let appointments = this.state.appointments
    if(appointments) {
      return (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between'
        }}>
          {appointments.map((appointment) => {
            return <AppointmentCard key={appointment.id} appointment={appointment} navigation={this.props.navigation}/>
          })}
        </ScrollView>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>AppointmentsIndexScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
	reduxState:state
});
export default connect(mapStateToProps, {
  Auth,
  updateAccessToken,
})(AppointmentsIndexScreen);