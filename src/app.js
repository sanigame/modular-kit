import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Routes from './routes'

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

AppRegistry.registerComponent('ModularKit', () => App);
