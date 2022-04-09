import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View} from "../components/Themed";
import {Nav, STYLE} from "../constants/GeneralType";
import AppHeader from "../components/AppHeader";

export default function MessageScreen() {
  const { navigate } = useNavigation<Nav>();
  return (
    <View style={STYLE.container}>
      <AppHeader/>
    </View>);
}
