import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { connect } from 'react-redux';
import { authSuccess } from '../../redux/actions/auth'
import Auth from '../../redux/reducers/auth';

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
    console.log('FORM VALUES', formValues);
    console.log('THIS PROPS', this.props);
    this.props.authSuccess({testObject: "value"})

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
