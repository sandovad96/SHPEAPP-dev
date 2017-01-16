import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, Navigator, NavigatorIOS} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default class Navigation extends Component {
    render() {
        const routes = [{id:'LoginScreen'},{id:'HomeScreen'}];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.navigatorRenderScene}/>
    );
  }
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'LoginScreen':
        return (<LoginScreen navigator={navigator}/>);
      case 'HomeScreen':
        return (<HomeScreen navigator={navigator}/>);
    }
  }
}