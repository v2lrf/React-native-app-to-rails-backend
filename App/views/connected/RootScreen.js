import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => ({
	reduxState:state
});
// Remplacer le rootScreen par le composent react
export default connect(mapStateToProps, {
	Auth,
})(RootScreen);