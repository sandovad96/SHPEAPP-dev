import React, { Component } from 'react';
import {AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';

export default class HomeScreen extends Component{
  render() {
    return (
      <View>
       <Image source = {require("./Background.png")} style = {{flex:1}}  resizeMode={Image.resizeMode.contain} />
      </View>
    );
  }
};