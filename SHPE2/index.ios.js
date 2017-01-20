/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, NavigatorIOS} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';
import Navigation from'./Navigation';
import LoginScreen from './LoginScreen';

export default class SHPE2 extends Component {

    render() {
    return (
      <Navigation/>
    );
}

}

AppRegistry.registerComponent('SHPE2', () => SHPE2);
