import React from "react";
import {
  StyleSheet,
  Button,
  Alert
} from "react-native";
import { View, Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReturnButton from "../components/ReturnButton";
import Color from "../constants/Color";
import DefaultAvatar from "../components/DefaultAvatar";
import { EvilIcons } from '@expo/vector-icons';
import VipBar from "../components/VipBar";
import ProfileBar from "../components/ProfileBar";

export default function Profile({ navigation, }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 50, marginRight: 50 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ReturnButton size={30} color={Color.fontGreen} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: Color.white, justifyContent: "center", width: 150, marginRight: 50 }}>
          <Text style={styles.smallTitle}>BuyTogether</Text>
        </View>
      </View>
      <DefaultAvatar
        backgroundColor="#F9D9D2"
        height={120}
        width={120}
        marginTop={20}
        marginBottom={5}
      />
      <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}>
        <Text style={{ color: Color.fontGreen, fontSize: 15 }}>Angelica</Text>
        <EvilIcons name="pencil" size={24} color={Color.fontGreen} />
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ color: Color.addressGreen, fontSize: 18 }}>angelica@gmail.com</Text>
      </View>
      <VipBar credit={1000} />
      <ProfileBar />
      <View style={styles.button}>
        <Button
          onPress={() => Alert.alert("Log Out!")}
          title="Log Out"
          color={Color.white}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  header: {
    backgroundColor: Color.white,
    flexDirection: "row",
    width: 350,
    marginTop: 50,
    justifyContent: "flex-start"
  },
  smallTitle: {
    color: Color.fontGreen,
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.fontGreen,
    width: 150,
    height:40,
    justifyContent:"center",
    borderRadius: 10,
    marginTop: 40,
  },
});
