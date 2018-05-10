import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Auth from '../../redux/reducers/auth';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    // Enter in this case if the user just logged in or if there was data stored in reduxPersist
    if( this.props.reduxState.Auth.connected || this.props.reduxState.Auth.rehydrated) {
      this.checkIfConnected();
    }
  }

  checkIfConnected = () => {
    // In this case user just logged or user have session in local storage    
    if(this.props.reduxState.Auth.connected) {
      this.props.navigation.navigate('App');
    }
    // In this case user have session but it had been destroyed when it was last connected
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
})(AuthLoadingScreen);