import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginForm from '../../models/forms/LoginForm';

export default class LoginScreen extends React.Component {  
  static navigationOptions = {
    title: 'Connexion',
  };
  render() {
    // Get navigation props to be able to use navigate function
    const { navigate } = this.props.navigation;
    return (
      // Send navigation props
      <LoginForm navigation={this.props.navigation}/>
    );
  }
}