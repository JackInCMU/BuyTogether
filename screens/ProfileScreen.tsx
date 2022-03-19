import React, { useEffect } from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, Pressable } from 'react-native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';



export default function ProfileScreen() {
  // const {state, update} = React.useContext(AppContext);
  // if(state === 'signup') {
  //   return (
  //     SignUpScreen()
  //   );
  // } else if (state === 'signin') {
    return (
      SignUpScreen()
    )
  // }
}
