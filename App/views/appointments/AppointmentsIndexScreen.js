import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Axios from 'axios';

import Auth from '../../redux/reducers/auth';
import { Url } from '../../../config/api/credentials';
import { updateAccessToken } from '../../redux/actions/auth';
import AppointmentCard from '../../components/appointments/Card';



class AppointmentsIndexScreen extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAppointments = this.fetchAppointments.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.seeAppointmentDetail = this.seeAppointmentDetail.bind(this);
    this.state = {
      appointments: [],
    }
  }

  static navigationOptions = {
    title: 'List of Appointments',
  };

  componentWillMount = () => {
    this.fetchAppointments();
  }
  

  fetchAppointments() {
    var self = this;
    var accessToken = this.props.reduxState.Auth.token
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

  seeAppointmentDetail(appointment) {
    this.props.navigation.navigate("Show", {appointment})
  }

  deleteAppointment(appointment) {
    var self = this;
    var accessToken = this.props.reduxState.Auth.token
    Axios.delete(Url.appointments+appointment.id, {headers: Object.assign(Url.headers, accessToken)})
    .then(function (response) {
      if(response.headers["access-token"] != "") {
        self.props.updateAccessToken(response.headers["access-token"])
      }
      self.setState((prevState) => ({
        appointments: prevState.appointments.filter(e => e !== appointment)
      }));
    })
    .catch(function (error) {
      console.log("ERROR DURING deleteAppointment id: "+appointment.id, error);
    });
  }

  render() {
    let appointments = this.state.appointments
    if(appointments) {
      return (
        <ScrollView>
          {appointments.map((appointment) => {
            return <AppointmentCard 
                      key={appointment.id} 
                      deleteAppointment={ () => { this.deleteAppointment(appointment) } } 
                      seeAppointmentDetail={ () => { this.seeAppointmentDetail(appointment) } }
                      appointment={appointment} 
                      navigation={this.props.navigation}
                    />
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