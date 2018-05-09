import React from 'react';
import { Text, View } from 'react-native';

export default class RootScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  // Default title
  static navigationOptions = {
    title: "RootScreen"
  };

  render() {
    // Get navigation props to be able to use navigate function
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Root Screen</Text>
      </View>
    );
  }
}