import React from 'react';
import { View, Button, Text } from 'native-base';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import GenerateForm from 'react-native-form-builder';
import Axios from 'axios';
import { connect } from 'react-redux';

import Auth from '../../redux/reducers/auth';
import { updateAccessToken } from '../../redux/actions/auth';
import { Url } from '../../../config/api/credentials';

const styles = {
  wrapper: {
    flex: 1,
    marginTop: 150,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
};

const fields = [
  {
    type: 'text',
    name: 'title',
    required: true,
    icon: 'ios-text',
    label: 'Title',
  },
  {
    type: 'text',
    name: 'body',
    icon: 'md-text',
    required: true,
    label: 'Body',
  },
];

class AppointmentEdit extends React.Component { 
  constructor(props){
    super(props)
    console.log("Edit", this.props)
  }

  static navigationOptions = {
    title: 'Edit Appointment',
  };

  updateAppointment(id) {
    console.log("fdshfsf", this.props)
    var accessToken = this.props.reduxState.Auth.token
    const formValues = this.formGenerator.getValues();
    // save this in variable to dont forget
    var self = this;
    // Put the request
    Axios.put(Url.appointments+id, formValues, {headers: Object.assign(Url.headers, accessToken)})
    .then(function (response) { // ON SUCCESS
      if(response.headers["access-token"] != "") {
        self.props.updateAccessToken(response.headers["access-token"])
      }
      self.props.navigation.state.params.refreshComponent()
      self.props.navigation.navigate("Index");
      console.log("UPDATE SUCCESS", response)
    })
    .catch(function (error) {
      console.log("ERROR DURING updateAppointment", error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { appointment } = this.props.navigation.state.params
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
            formData={appointment}
          />
        </View>
        <View style={styles.submitButton}>
          <Button block onPress={() => this.updateAppointment(appointment.id)}>
            <Text>Update</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	reduxState:state
});
export default connect(mapStateToProps, {
  Auth,
  updateAccessToken,
})(AppointmentEdit);