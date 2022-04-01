import React, { FC } from "react";
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

interface Props {
  size: number;
  color: string;
}

const ReturnButton: FC<Props> = (props) => {
  return (
      <Ionicons
      name="chevron-back"
      size={props.size}
      color={props.color}
      style={styles.backButton}
    />
  )
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "transparent",
    paddingTop: 8,
    marginRight: 12,
  }
})

export default ReturnButton;