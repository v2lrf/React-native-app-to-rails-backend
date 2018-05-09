import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    // Get navigation props to be able to use navigate function
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
    );
  }
}