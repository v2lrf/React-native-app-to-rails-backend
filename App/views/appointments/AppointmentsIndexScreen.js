import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Axios from 'axios';

import Auth from '../../redux/reducers/auth';
import { Url } from '../../../config/api/credentials';
import { updateAccessToken } from '../../redux/actions/auth';


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
    // Get navigation props to be able to use navigate function
    const { navigate } = this.props.navigation;
    if(this.state.appointments) {
      return this.state.appointments.map((appointment) => {
        return (
          // add key here
          // add on press function and send appointment.id to go on the show page 
          <View key={appointment.id}><Text style={styles.titleText}>{appointment.title}</Text></View>
        )
      })
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