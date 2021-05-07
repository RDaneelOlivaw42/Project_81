import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            emailId: '',
            password: ''
        }
    }


    login = async (emailId, password)=>{

        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return alert("User Successfully Logged-in");
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage);
        })

    }


    signUp = async (emailId, password)=>{

        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
            return alert("User Account created");
        })
        .catch((error)=>{
            var errorCode = error.message;
            var errorMessage = error.message;
            return alert(errorMessage);
        })

    }


    render(){
        return(
            <View style = {{height: '100%'}}>
            <ImageBackground source = {require('../bg.png')}  style = {{width: '100%', height: '100%'}}>
            <View style = {{marginLeft: 100, marginRight: 100}}>
                
                <View style = {styles.bgBlur} />
                <Text style = {styles.header}>BARTER SYSTEM</Text>

                <View style = {{flex: 1, flexDirection: 'column', marginTop: 90}}>
                    <TextInput 
                      style = {styles.loginInput}
                      placeholder = "Enter Email-ID"
                      placeholderTextColor = '#F6C4B2'
                      onChangeText = {(text)=>{
                          this.setState({
                              emailId: text
                          })
                      }}/>

                    <TextInput 
                      style = {styles.loginInput}
                      placeholder = "Enter Password"
                      placeholderTextColor = '#F6C4B2'
                      secureTextEntry = {true}
                      onChangeText = {(text)=>{
                          this.setState({
                              password: text
                          })
                      }}/>
                </View>

                <View style = {{flex: 1, flexDirection: 'column', marginTop: 50}}>
                  <TouchableOpacity
                    style = {styles.loginButton}
                    onPress = {()=>{
                        this.login(this.state.emailId, this.state.password);
                    }}>
                        <Text style = {styles.loginButtonText}>LOGIN</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style = {styles.loginButton}
                    onPress = {()=>{
                       this.signUp(this.state.emailId, this.state.password)
                    }}>
                        <Text style = {styles.loginButtonText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>

            </View>
            </ImageBackground>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    sideView: {
        backgroundColor: '#1D3E4D',
        width: '10%',
        height: '100%'
    },

    header: {
        fontSize: 60,
        fontFamily: 'big caslon',
        alignSelf: 'center',
        color: '#fff',
        marginTop: -100,
    },

    loginInput: {
        backgroundColor: '#AE8277',
        borderBottomColor: '#494951',
        borderBottomWidth: 2,
        width: '50%',
        alignSelf: 'center',
        height: 40,
        marginTop: 30,
        borderRadius: 3,
        padding: 10,
        fontFamily: 'baskerville',
        fontSize: 16
    },

    loginButton: {
        backgroundColor: '#5C96B6',
        alignSelf: 'flex-start',
        width: '10%',
        justifyContent: 'center',
        marginTop: 30,
        padding: 13,
        shadowColor: '#31565F',
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 4,
        marginLeft: 300
    },

    loginButtonText: {
        textAlign: 'center',
        fontFamily: 'baskerville'
    },

    bgBlur: {
        backgroundColor: 'white',
        width: '55%',
        height: 130,
        alignSelf: 'center',
        opacity: 0.4,
        marginTop: 50,
    }

})

/*
 <View style = {[styles.sideView]} />
                <View style = {[styles.sideView]} />
*/