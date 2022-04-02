import {Image, ImageStyle, StyleProp} from "react-native";
import React from "react";
import {ScaleSize} from "react-native-scale-size";
import {StyleSheet} from 'react-native';

function DefaultAvatar(style: StyleProp<ImageStyle>){
  return <Image style={[styles.avatar, style]} source={require("../assets/images/default-avatar.jpg")}/>
}

const randomColors = ["#F43545", "#FF8901","#FAD717", "#00BA71","#00C2DE","#00AAFF", "#BEA8E6",
"#FBFAC4", "#97FEFD", "#ED1B24", "#F4BD18", "#01B1FA", "#F54393",  "#CCABDA"]

export function RandomAvatar(style: StyleProp<ImageStyle>) {
  let color = randomColors[Math.floor(Math.random()*Object.keys(randomColors).length)];
  return DefaultAvatar([{backgroundColor:color}, style])
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
