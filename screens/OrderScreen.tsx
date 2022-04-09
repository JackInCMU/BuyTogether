import React from "react";
import {View, Text} from "../components/Themed";
import {STYLE} from "../constants/GeneralType";
import AppHeader from "../components/AppHeader";

export default function OrderScreen() {
  return (<View style={STYLE.container}>
    <AppHeader/>
    <Text>This is Order Screen</Text>
  </View>);
}
