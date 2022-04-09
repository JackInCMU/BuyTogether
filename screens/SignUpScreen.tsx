import React, { useReducer, useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text, View } from "../components/Themed";
import { AppContext } from "../components/AppContext";
import Color from "../constants/Color";
import { auth, createUserWithEmailAndPassword, firestore } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

export default function SignUpScreen({ navigation }) {
  //const {state, update} = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const handleSignUp = () => {
    if (password !== passwordConfirm) {
      Alert.alert("Error", "Password and Confirm Password must match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("SignInScreen");
        storeUserData(email);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.jpg")}
      />
      <Text style={styles.title}>BuyTogether</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Register a new account</Text>
        <Text style={styles.hintText}>Please Sign up to your account</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="Enter password again"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          autoCapitalize="none"
          secureTextEntry
        ></TextInput>
        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Sign Up</Text>
        </Pressable>
        <Text style={{ fontSize: 10, marginTop: 20, textAlign: "center" }}>
          Already have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          <Text
            style={{
              fontSize: 10,
              marginTop: 5,
              color: Color.themeColorGreen,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

async function storeUserData(email: string) {
  //store user data to firebase
  const docRef = await addDoc(collection(firestore, "users"), {
    email: email,
    address: "address_test",
    payment_detail: "payment_detail_test",
    order_list: [],
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    padding: 5,
  },
  card: {
    color: "#FFFFFF",
    width: 320,
    marginTop: 80,
    marginBottom: 35,
    borderRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  hintText: {
    marginVertical: 10,
    fontSize: 12,
    color: "#C4C4C4",
    fontWeight: "bold",
  },
  input: {
    marginVertical: 10,
    paddingLeft: 8,
    height: 40,
    borderColor: "#eeeeee",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: Color.themeColorGreen,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
