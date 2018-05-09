import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Auth from '../../redux/reducers/auth';
import { setUserByStorage } from '../../redux/actions/auth'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const lastUserState = await AsyncStorage.getItem('myCustomStorageKey');
    
    // If data exists in the local storage then let us reuse them to connect the user
    if(lastUserState) {
      var lastUserStateObj = JSON.parse(lastUserState);
      // Set local storage values in redux
      this.props.setUserByStorage(lastUserStateObj)
      this.props.navigation.navigate('App');
    }
    else {
      this.props.navigation.navigate('Auth');
    }
    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
	reduxState:state
});
export default connect(mapStateToProps, {
  Auth,
  setUserByStorage,
})(AuthLoadingScreen);