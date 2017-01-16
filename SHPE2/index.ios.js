/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, Navigator} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Navigation from'./Navigation';

export default class SHPE2 extends Component {
  render() {
    return (<LoginScreen/>);
  }
}

AppRegistry.registerComponent('SHPE2', () => SHPE2);
