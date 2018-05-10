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
    console.log("ENTER IN AUTH LOADING", Date.now())
    console.log("ENTER IN AUTH LOADING", this.props)
    if( this.props.reduxState.Auth.connected || this.props.reduxState.Auth.rehydrated) {
      this.checkIfConnected();
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkIfConnected = () => {    
    // If data exists in the local storage then let us reuse them to connect the user
    if(true) {
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