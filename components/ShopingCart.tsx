import React, { FC } from "react";
import { StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

interface Props {
  size: number;
  color: string;
}
const ShoppingCart: FC<Props> = (props) => {
  return (
    <AntDesign
      name="shoppingcart"
      size={props.size}
      color={props.color}
      style={styles.shoppingCart}
    />
  )
}
const styles = StyleSheet.create({
  shoppingCart: {
    height: 36,
    paddingTop: 9,
    paddingLeft: 18
  }
})
export default ShoppingCart;