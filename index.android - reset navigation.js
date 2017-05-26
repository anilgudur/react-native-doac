/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (

      // Sign In
      <Button
        onPress={() => navigate('Home')}
        title="Sign In"
      />

    );
  }
}

class OptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Options',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props.navigation;
    return (

      // Options!
      <Button
        //onPress={() => { dispatch({ type: 'Reset', actions: [{ type: 'Navigate', routeName: 'Signin' }], index: 0 }) }}
        onPress={() => dispatch(NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({ routeName: 'Signin'})]}))} 
        title="Logout"
      />

    );
  }
}

class RecentChatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Recent Chats',
    headerRight: <Button title='Options' onPress={() => navigation.navigate('Options')} />,
  });

  render() {
    return (

      // List of recent chats
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />

    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (

      // List of recent chats
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
        title="Chat with Jane"
      />

    )

  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

class ChatScreen extends React.Component {
  // static navigationOptions = {
  //   // Nav options can be defined as a function of the navigation prop:
  //   title: ({ state }) => "Chat with ${state.params.user}"
  // };
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });

  render() {
    // The screen's current route is passed in to props.navigation.state:
    const { params } = this.props.navigation.state;
    return (
      <Text>
        Chat with {params.user}
      </Text>
);
  }
}

const TheApp = StackNavigator({
  Signin: { screen: SigninScreen },
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
  Options: { screen: OptionsScreen },

});

AppRegistry.registerComponent('DoctorV1', () => TheApp);
