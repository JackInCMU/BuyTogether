import Color from "../constants/Color";
import {View} from "./Themed";
import React from "react";

// Grey separator line
export default function GreySeparator() {
  return <View style={{height: 1}} lightColor={Color.separatorGrey} darkColor={Color.separatorGrey}/>
}
