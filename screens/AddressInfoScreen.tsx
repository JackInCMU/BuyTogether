import React from "react";
import {StyleSheet, Button, Alert} from "react-native";
import { View, Text } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";
import { TouchableOpacity } from "react-native-gesture-handler";
import {SearchBarWithAutoComplete} from "../components/SearchBarWithAutoComplete";
import {useNavigation} from "@react-navigation/native";
import {STYLE} from "../constants/GeneralType";

export default function AddressInfoScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={STYLE.container}>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: Color.themeColorGreen,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ width: 75, flex: 1 }}
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              style={styles.backButton}
              name="chevron-back"
              size={30}
              color="#085B26"
            />
          </TouchableOpacity>
          <Text style={styles.smallTitle}>BuyTogether</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Color.themeColorGreen,
            justifyContent: "center",
          }}
        >
        </View>
      </View>

      <View style={styles.content}>
        <View
          style={[styles.row, { padding: 10, justifyContent: "flex-start" }]}
        >
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 10,
              alignSelf: "center",
              color: Color.fontGreen,
              fontWeight:"bold",
            }}
          >
            Edit your address
          </Text>

        </View>
        <SearchBarWithAutoComplete/>

        {/* save button */}
        <View style={styles.saveButton}>
          <Button
            onPress={() => Alert.alert("Saved!")}
            title="Save"
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEE4BE",
    paddingTop: 50,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  backButton: {
    //paddingTop: 8,
    paddingLeft: 12,
    //backgroundColor: Color.themeColorGreen,
    //position: "absolute",
  },
  addrtitle: {
    color: Color.fontGreen,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 18,

  },
  smallTitle: {
    color: Color.fontGreen,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 80,
    marginTop: 6,
    backgroundColor: Color.themeColorGreen,
  },
  content: {
    flex: 1,
    marginTop:13
  },
  saveButton: {
    backgroundColor: "#085B26",
    width: "35%",
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
  },
});
