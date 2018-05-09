import React from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';
import { AppRegistry, AsyncStorage } from 'react-native';

import Auth from '../../redux/reducers/auth';



class RootScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("ENTER IN RootScreen.js constructor", this.props)
  }
  // Default title
  static navigationOptions = {
    title: "RootScreen"
  };

  componentWillMount = () => {
    var saveState = this.props.reduxState.Auth
    this.setTokenStorage('myCustomStorageKey', saveState);
  }

  async setTokenStorage(key, userDatas) {
    await AsyncStorage.setItem(key, JSON.stringify(userDatas));
  }

  async destroySession() {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  

  render() {
    // Get navigation props to be able to use navigate function
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Root Screen</Text>
        <Button block onPress={() => this.destroySession()}>
            <Text>LogOut</Text>
          </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	reduxState:state
});
export default connect(mapStateToProps, {
	Auth,
})(RootScreen);