import React from 'react';
import { StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import Color from '../constants/Color';
import {RootTabScreenProps} from "../types";

export default class SignInScreen extends React.Component<{ navigation: any }> {
  render() {
    let {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/images/logo.jpg")}/>
        <Text style={styles.title}>BuyTogether</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome Back</Text>
          <Text style={styles.hintText}>Please log in to your account</Text>
          <TextInput style={styles.input}
                     placeholderTextColor="#ccc"
                     placeholder='Username'>
          </TextInput>
          <TextInput style={styles.input}
                     placeholderTextColor="#ccc"
                     placeholder='Password'>
          </TextInput>
          <Text style={{fontSize: 12, margin: 5, textAlign: 'right', fontWeight: 'bold'}}>Forget Password?</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate("Root")}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Sign In</Text>
          </Pressable>
          <Text style={{fontSize: 10, marginTop: 20, textAlign: 'center'}}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={{
              fontSize: 10,
              marginTop: 5,
              color: Color.themeColorGreen,
              textAlign: 'center',
              fontWeight: 'bold'
            }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.themeColorGreen,
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
    backgroundColor: Color.themeColorGreen,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
}
});
