import React, { FC } from "react";
import { View, Text } from "../components/Themed";
import {StyleSheet, TextInput} from 'react-native';
import {Feather, MaterialIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Color from "../constants/Color";
import ForwardButton from "../components/ForwardButton"
import GreySeparator from "../components/GreySeparator"

interface Props {
}
const Headers: FC<Props> = (props) => {
  return (
      <Text style={styles.smallTitle}>BuyTogether</Text>
  )
}

const styles = StyleSheet.create({
    smallTitle: {
        color: "#085B26",
        fontWeight: "700",
        fontSize: 14,
    },
})
export default Headers;