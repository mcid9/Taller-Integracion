import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// VISTAS
import LoginScreen from './src/Views/Login';
import RegistroScreen from './src/Views/Registro';

import NavigationService from './src/Components/NavigationService';


const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registro: RegistroScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    //return <AppContainer />;
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );

  }
}