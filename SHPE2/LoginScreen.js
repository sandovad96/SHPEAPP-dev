/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert, Navigator} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input, Icon} from 'native-base';

import HomeScreen from './HomeScreen';

export  default class LoginScreen extends Component {
  render() {
    return (
      
      <View style={styles.container}>
      <Image source = {require("./Background.png")} style = {{flex:1}}  resizeMode={Image.resizeMode.contain} >
        <View style = {styles.container} resizeMode = {Image.resizeMode.contain}>
         <Image source={require("./shpepic.png")} style={{width:220, height:110}} />
          <Text style={styles.welcome}>
            Society of Hispanic Professional Engineers
            
          </Text>
          <LogInInput navigator ={this.props.navigator}/>
          <Image source = {require("./OR.png")} resizeMode = {Image.resizeMode.contain} style={{width:350, height:40, marginBottom:10}}/>
          <FacebookLoginButton/>
        </View>
      </Image>
      </View>
    );
  }

  /*logIn() {
    if (LogInInput.state && LogInInput.state.username && LogInInput.state.password) {
      username = LogInInput.state.username;
      password = LogInInput.state.password;
      if (username == "Username" && password == "Password") {
        this.props.navigator.push({id:"Home"})
      } else {
        Alert.alert("Login failed " + username + ", " + password);
      }
    } else {
      Alert.alert("Login failed")
    }
  }*/

} 

export class LogInInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }

  render() {
    return (
    <View style= {{margin:10, alignItems:'center'}} >
      <View style = {styles.loginInput} >
        <InputGroup borderType='rounded' style={{paddingLeft:10}}>
        <Icon name='ios-contact' style={{color:'#A9A9A9'}}/>
            <Input onChangeText={(username) => this.setState({username})}
            placeholder='Username'/>
        </InputGroup>
        </View>
        <View style = {styles.loginInput} >
        <InputGroup borderType='rounded' style={{paddingLeft:12}}>
        <Icon name='ios-lock' style={{color:'#A9A9A9'}}/>
            <Input style={{paddingLeft:8}} 
              onChangeText={(password) => this.setState({password})}
              placeholder='Password' secureTextEntry/>
          </InputGroup>
          </View>
        <LoginButton logIn = {this.logIn} navigator ={this.props.navigator} />
          </View> 
          
      );
  }
  logIn() {
    if (this.state && this.state.username && this.state.password) {
      username = this.state.username;
      password = this.state.password;
      if (username == "Username" && password == "Password") {
        this.props.navigator.push({id:"Home"})
      } else {
        Alert.alert("Login failed " + username + ", " + password);
      }
    } else {
      Alert.alert("Login failed")
    }
  }
  
}


 class LoginButton extends Component {
   constructor(props) {
    super(props);
    this.state = {
    }
  }
  
    render() {
       const routes = [{id:'LoginScreen'},{id:'HomeScreen'}];
        return (
          
           <View style={{height:50}}>
            <Container>
                <Content>
                    <Button style={{backgroundColor: '#eeb211'}} onPress={() => this.props.logIn()} rounded >              Login           </Button>
                </Content>
            </Container>
            </View>
        );
    }
   /*nextScreen() {
     this.props.navigator.push({id:"Home"})
     
   }*/
   
} 

class FacebookLoginButton extends Component {
    render() {
        return (
           <View style={{height:50}}>
              <Content>
                  <Button style={{backgroundColor: '#3b5998'}} 
                  onPress={() =>alert('LOGGED IN WITH FACEBOOK')} rounded > 
                  <Icon name='logo-facebook' size={18} style={{paddingLeft:5}} />
                  Login with Facebook
                  </Button>
              </Content>
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
    flexDirection: "row",
    width:200,
    marginBottom:10
  }
});

