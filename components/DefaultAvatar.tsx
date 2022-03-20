import {Image,  ImageStyle, StyleProp} from "react-native";
import React from "react";
import {ScaleSize} from "react-native-scale-size";
import {StyleSheet} from 'react-native';

export default function DefaultAvatar(style: StyleProp<ImageStyle>){
  return <Image style={[styles.avatar, style]} source={require("../assets/images/default-avatar.jpg")}/>
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
    justifyContent: 'flex-start',
    borderRadius: ScaleSize(20),
    resizeMode:"cover"
  },
});
