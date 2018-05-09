import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';
import Axios from 'axios';
import { connect } from 'react-redux';

import { authSuccess } from '../../redux/actions/auth'
import Auth from '../../redux/reducers/auth';
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
// These Fields will create a login form with three fields
const fields = [
  {
    type: 'text',
    name: 'user_name',
    required: true,
    icon: 'ios-person',
    label: 'Username',
  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-lock',
    required: true,
    label: 'Password',
  },
];
class LoginForm extends Component {
  login() {
    const formValues = this.formGenerator.getValues();
    this.newSession(formValues.user_name, formValues.password)
  }

  // Sign_in User
  newSession(email, password) {
    // save this in variable to dont forget
    var self = this;
    var credentials = {'email': email, 'password': password}
    // Post the request
    Axios.post(Url.login, {}, {headers: Object.assign(Url.headers, credentials)})
    .then(function (response) { // ON SUCCESS
      // Valid token received in the headers response
      self.validateToken(response)
    })
    .catch(function (error) {
      // Return error if credentials is invalids
      console.log("ERROR DURING newSession (LoginForm.js)", error);
    });
  } // End of newSessions()

  validateToken(response){
    // save this in variable to dont forget
    var self = this;
    var accessToken = {
      "access-token": response.headers["access-token"],
      "client": response.headers.client,
      "uid": response.headers.uid
    }
    // Validate token
    Axios.get(Url.validate_token, {headers: Object.assign(Url.headers, accessToken)})
    .then(function (response) { // ON SUCCESS TOKEN VALIDATION
      // Token is valided then user is connected => set user datas in reduxState
      self.props.authSuccess(response, accessToken)
    })
    .catch(function (error) {
      // if an error occurs during validation
      console.log("ERROR DURING TOKEN VALIDATION", error);
    });
  }


  render() {
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
          <Button block onPress={() => this.login()}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	reduxState:state
});
// Export the react component included in redux connect
export default connect(mapStateToProps, {
	Auth,
  authSuccess,
})(LoginForm);
