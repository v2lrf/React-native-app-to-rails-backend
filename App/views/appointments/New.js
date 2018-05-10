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

class AppointmentNew extends React.Component { 
  constructor(props){
    super(props)
    console.log("NEW", this.props)
  }

  static navigationOptions = {
    title: 'New Appointment',
  };

  createAppointment() {
    var accessToken = this.props.reduxState.Auth.token
    const formValues = this.formGenerator.getValues();
    // save this in variable to dont forget
    var self = this;
    // Post the request
    Axios.post(Url.appointments, formValues, {headers: Object.assign(Url.headers, accessToken)})
    .then(function (response) { // ON SUCCESS
      if(response.headers["access-token"] != "") {
        self.props.updateAccessToken(response.headers["access-token"])
      }
      self.props.navigation.state.params.refreshComponent()
      self.props.navigation.navigate("Index");
      console.log("CREATE SUCCESS", response)
    })
    .catch(function (error) {
      console.log("ERROR DURING createAppointment", error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={styles.submitButton}>
          <Button block onPress={() => this.createAppointment()}>
            <Text>Create</Text>
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
})(AppointmentNew);