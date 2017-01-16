/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, Navigator} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';

import HomeScreen from './HomeScreen';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source = {require("./Background.png")} style = {{flex:1}}  resizeMode={Image.resizeMode.contain} >
        <View style = {styles.container} resizeMode = {Image.resizeMode.contain}>
         <Image source={require("./shpepic.png")} style={{width:220, height:110}} />
          <Text style={styles.welcome}>
            Society of Hispanic Professional Engineers
          </Text>
          <LogIn />
          <LoginButton/>
          <Image source = {require("./OR.png")} resizeMode = {Image.resizeMode.contain} style={{width:350, height:40, marginBottom:10}}/>
          <FacebookLoginButton/>
        </View>
      </Image>
      </View>
    );
  }
}

class LogIn extends Component {
  render() {
    return (
    <View style= {{margin:10}} >
      <View style = {styles.loginInput} >
        <Text style={styles.directions}>
          Log in:  </Text> 
        <TextInput
          style={styles.instructions}
          placeholder= "Username"
          onChangeText={(text) => this.setState({text})}/>
        </View>
        <View style = {styles.loginInput} >
        <Text style={styles.directions}>
          Password: </Text>
        <TextInput
          style={styles.instructions}
          placeholder= "Password"
          onChangeText={(text) => this.setState({text})}/>
          </View>
          </View> 
      );
  }
}


class LoginButton extends Component {
  
    render() {
       const routes = [{id:'LoginScreen'},{id:'HomeScreen'}];
        return (
          
           <View style={{height:50}}>
            <Container>
                <Content>
                    <Button style={{backgroundColor: '#eeb211'}} onPress={() =>this.navigatorRenderScene.bind(this)} rounded >              Login               </Button>
                </Content>
            </Container>
            <Navigator
              initialRoute={routes[0]}
              initialRouteStack={routes}
              renderScene={(oute,navigator)}/>
            </View>
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
    nextFunction() {

    }
}

class FacebookLoginButton extends Component {
    render() {
        return (
           <View style={{height:50}}>
            <Container style={{flex:1}}>
                <Content>
                    <Button style={{backgroundColor: '#3b5998'}} onPress={() =>alert('LOGGED IN WITH FACEBOOK')} rounded >  Login with Facebook  </Button>
                </Content>
            </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  directions: {
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 10,
    height: 18,
    fontSize: 15, 
    width:71
  },
  instructions:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 5,
    height: 18,
    fontSize: 15, 
    width:101
  },
  loginInput : {
    alignItems: 'center',
    flexDirection: "row"
  }
});

