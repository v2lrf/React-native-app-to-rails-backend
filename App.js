import React from 'react';
import { Provider, connect } from 'react-redux';

import store from './App/redux/store';
import Root from './Root';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRootContainer />
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
	state,
});

const ConnectedRootContainer = connect(mapStateToProps,null)(Root);