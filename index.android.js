/**
 * DOACV1 React Native App
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from "./src/app";

class AppNavigatorComponent extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }

}

AppRegistry.registerComponent('DoctorV1', () => AppNavigatorComponent);