import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Router from './config/routes/Router';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  // formbulder requires some font, there may be forms anywhere in the app so as well place the call here
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
