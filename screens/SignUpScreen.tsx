import React, { useReducer, useState } from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppContext } from '../components/AppContext';
export default function SignUpScreen() {
  const {state, update} = React.useContext(AppContext);
  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/images/logo.jpg")} />
        <Text style={styles.title}>BuyTogether</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle} >Register a new account</Text>
          <Text style={styles.hintText}>Please Sign up to your account</Text>
              <TextInput style={styles.input}
                  placeholderTextColor = "#ccc" 
                  placeholder='Username'>
              </TextInput>
              <TextInput style={styles.input}
                  placeholderTextColor = "#ccc" 
                  placeholder='Password'>
              </TextInput>
              <TextInput style={styles.input}
                  placeholderTextColor = "#ccc" 
                  placeholder='Enter password again'>
              </TextInput>
              <Pressable style={styles.button} onPress={()=>Alert.alert("Sign Up Button Pressed")}>
                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sign Up</Text>
              </Pressable>
              <Text style={{fontSize:10, marginTop:20, textAlign:'center'}} >Already have an account?</Text>
              <Pressable onPress={()=> {
                Alert.alert("Sign In");
              }}>
                  <Text style={{fontSize:10, marginTop:5, color:'#99DE9F', textAlign:'center',fontWeight:'bold'}}>Sign In</Text>
              </Pressable>
        </View>
      </View>
      
    );
  } 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#99DE9F',
    },
    logo: {
      width: 90,
      height: 90,
      marginTop: 140,
      borderRadius: 20,
    },
    title: {
      width: 180,
      height: 45,
      marginTop: 15,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: "center",
      color: "#FFFFFF",
      padding: 5,
      flex:1
    },
    card: {
      color: "#FFFFFF",
      width: 320,
      marginBottom: 35,
      borderRadius: 40,
      paddingHorizontal: 40,
      paddingVertical: 25,
    },
    cardTitle: {
      fontSize: 21,
      fontWeight: 'bold',
      letterSpacing: 0.3,
    },
    hintText: {
      marginVertical: 10,
      fontSize: 12,
      color: '#C4C4C4',
      fontWeight: 'bold',
    },
  input: {
      marginVertical: 10,
      paddingLeft:8,
      height: 40,
      borderColor: '#eeeeee',
      borderWidth: 1,
      borderRadius: 10,
  },
  button: {
      marginTop: 10,
      backgroundColor: '#99DE9F',
      borderRadius: 10,
      height: 40,
      justifyContent: 'center',
      alignItems:'center',
  }
  });
  