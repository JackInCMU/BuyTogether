import {StyleSheet} from "react-native";

export type Nav = {
  navigate: (value: string) => void;
}

export const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEE4BE",
    paddingTop: 50,
  },
})
