import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, Navigator, NavigatorIOS} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LoginButton from './LoginScreen';
export default class Navigation extends Component {
    render() {
    return (
       <Navigator
       initialRoute={{id:"Login"}}
        renderScene={(route, navigator) =>
        {return this.renderScene(route, navigator)}}
      />
    );
}

renderScene(route, navigator) {
    switch(route.id) {
        case "Login":
            return ( <LoginScreen {...route.passProps} navigator={navigator}/>);
        case "Home": 
            return (<HomeScreen {...route.passProps} navigator={navigator}/>);
    }
}
}