import React, { FC } from "react";
import { View, Text } from "../components/Themed";
import {StyleSheet, TextInput} from 'react-native';
import {Feather, MaterialIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Color from "../constants/Color";
import ForwardButton from "../components/ForwardButton"
import GreySeparator from "../components/GreySeparator"

interface Props {
    searchType: string;
}
const SearchBar: FC<Props> = (props) => {
  return (
      <View style={styles.SearchBar}>
        <Feather
            name="search"
            size={20}
            color="#bdbdbd"
            style={{ height: 36, paddingTop: 6, paddingLeft: 6 }}
        />
        <TextInput
            placeholder={props.searchType}
            style={{
              backgroundColor: "transparent",
              marginLeft: 5,
              fontSize: 14,
            }}
        ></TextInput>
      </View>
  )
}

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: 250,
    height: 36,
    borderWidth: 1,
    borderColor: Color.fontGreen,
    borderRadius: 10,
    marginTop: 8,
  }
})
export default SearchBar;