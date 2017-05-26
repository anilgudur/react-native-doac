/**
 * DOACV1 React Native App
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { DrawerNavigator, DrawerItems, DrawerView, StackNavigator, TabNavigator } from 'react-navigation';

import { HomeScreen } from "./Home/HomeScreen";
import { IntroScreen } from "./Intro/IntroScreen";

import * as css from "./Styles/Styles";
import { Icon } from "react-native-elements";

//
// stack
//

const AppNavigator = StackNavigator(
    // route config
    {
        HomeRoute: { screen: HomeScreen }, // this is displayed first
        IntroRoute: { screen: IntroScreen },
    },
    // navigator config
    {
        //headerMode: 'none', // this removes the navigation header
        initialRouteName: 'HomeRoute',
        navigationOptions: ({ navigation }) => {
            return {
                // label text
                headerTitle: <TitleAndIcon navigation={navigation} />,
                // other styling
                ...css.header,
                headerRight: <MenuIcon navigation={navigation} />,
            }
        }
    }
);

class TitleAndIcon extends Component {
  render() {
    return (
    <View style={css.header.container}>
        <Text style={css.header.text}>Doctor App</Text>
    </View>
    )
  }
}

class MenuIcon extends Component {
  render() {
    return (
    <View style={css.header.right_header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} underlayColor="transparent">
            <Icon name="dehaze" color='white' />
        </TouchableOpacity>
    </View>
    )
  }
}

export default AppNavigator;