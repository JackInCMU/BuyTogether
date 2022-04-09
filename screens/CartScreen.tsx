import React from "react";
import { StyleSheet, Image, Button, Alert } from "react-native";
import { View, Text } from "../components/Themed";
import {Ionicons} from "@expo/vector-icons";
import Color from "../constants/Color";
import GreySeparator from "../components/GreySeparator";
import {RandomAvatar} from "../components/DefaultAvatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";
import {RootTabScreenProps} from "../types";

function CartNumericInput() {
  return  ( <NumericInput
    onChange={(value) => console.log(value)}
    totalWidth={60}
    totalHeight={30}
    iconSize={25}
    valueType="integer"
    minValue={0}
    maxValue={5}
  />)
}

export default function CartScreen({
  navigation,
}: RootTabScreenProps<"General">) {
  return (
    <View style={styles.container}>
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
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              style={styles.backButton}
              name="chevron-back"
              size={30}
              color="#085B26"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Shopping Cart</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Color.themeColorGreen,
            justifyContent: "center",
          }}
        >
          <Ionicons
            style={styles.locationButton}
            name="location-outline"
            size={12}
            color="#085B26"
          />
          <Text style={styles.locationText}>Sent to Fifth Avenue, 15213</Text>
        </View>
      </View>

      <View style={styles.separator} lightColor="#085B26" darkColor="#085B26" />
      <View style={styles.content}>
        <View
          style={[styles.row, { padding: 15, justifyContent: "flex-start" }]}
        >
          <RandomAvatar/>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 20,
              alignSelf: "center",
              color: "#085B26",
            }}
          >
            Angelica
          </Text>
        </View>
        <GreySeparator />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.shadow}>
            <View style={styles.item}>
              <Image
                style={styles.item_pic}
                source={require("../assets/images/chilli.jpeg")}
              />
              <View style={styles.name_price_tag}>
                <Text style={styles.item_name}>Chili</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>$0.99</Text>
                  <Text style={styles.unit}> / lb</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CartNumericInput/>
          </View>
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "bold",
              fontSize: 13,
              marginLeft: -60,
              marginBottom: 10,
            }}
          >
            $1.98
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.shadow}>
            <View style={styles.item}>
              <Image
                style={styles.item_pic}
                source={require("../assets/images/spinach.jpeg")}
              />
              <View style={styles.name_price_tag}>
                <Text style={styles.item_name}>Spinach</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>$3.99</Text>
                  <Text style={styles.unit}> / lb</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CartNumericInput/>
          </View>
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "bold",
              fontSize: 13,
              marginLeft: -60,
              marginBottom: 10,
            }}
          >
            $15.96
          </Text>
        </View>

        {/* receipt */}
        <View style={[styles.row, { paddingHorizontal: 30, paddingTop: 20 }]}>
          <Text style={[{ flex: 1 }, styles.receiptText]}>Subtotal</Text>
          <Text style={styles.receiptText}>$19.94</Text>
        </View>
        <View style={[styles.row, { paddingHorizontal: 30 }]}>
          <Text style={[{ flex: 1 }, styles.receiptText]}>Delivery</Text>
          <Text style={styles.receiptText}>$1.60</Text>
        </View>
        <View style={[styles.row, { paddingHorizontal: 30 }]}>
          <Text style={[{ flex: 1 }, styles.receiptText]}>Total</Text>
          <Text style={styles.receiptText}>$21.54</Text>
        </View>
        {/* checkout button */}
        <View style={styles.saveButton}>
          <Button
            onPress={() => Alert.alert("Check Out!")}
            title="Check Out"
            color="white"
          />
        </View>
        <GreySeparator />
        <View
          style={[styles.row, { padding: 10, justifyContent: "flex-start" }]}
        >
          <RandomAvatar/>
          <Text
            style={{
              fontSize: 20,
              flex: 1,
              paddingLeft: 20,
              alignSelf: "center",
              color: "#085B26",
            }}
          >
            Rebekah
          </Text>
          <View style={styles.buyStatus}>
            <Text
              style={{ color: "#4Cad73", fontWeight: "bold", fontSize: 14 }}
            >
              Completed
            </Text>
          </View>
        </View>
        <GreySeparator />
        <View
          style={[styles.row, { padding: 10, justifyContent: "space-between" }]}
        >
          <RandomAvatar/>
          <Text
            style={{
              fontSize: 20,
              flex: 1,
              paddingLeft: 20,
              alignSelf: "center",
              color: "#085B26",
            }}
          >
            Jerry
          </Text>
          <View style={[styles.buyStatus, { backgroundColor: "#C4C4C4" }]}>
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 14 }}
            >
              Shopping...
            </Text>
          </View>
        </View>
        <GreySeparator />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.shoppingStatus}>Shopping completed: 1/3</Text>
          <Text style={styles.shoppingStatus}>
            Add <Text style={{ color: "red", fontSize: 20 }}>$5</Text> more to
            get more discount
          </Text>
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
  title: {
    color: "#085B26",
    fontSize: 24,
    paddingBottom: 1,
    fontWeight: "bold",
    // textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    marginLeft: 30,
    backgroundColor: Color.themeColorGreen,
  },
  locationText: {
    color: "#84A883",
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 3,
  },
  locationButton: {
    color: "#84A883",
  },
  separator: {
    marginTop: 10,
    height: 2,
  },
  content: {
    flex: 1,
  },
  receiptText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#085B26",
    width: "35%",
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
  },
  buyStatus: {
    backgroundColor: "#99DE9F",
    alignContent: "center",
    alignItems: "center",
    marginRight: 20,
    width: 120,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
  shoppingStatus: {
    color: Color.fontGreen,
    fontWeight: "bold",
    padding: 5,
    fontSize: 16,
  },
  shadow: {
    paddingLeft: 20,
    shadowOffset: { width: 3, height: 5 },
    shadowColor: "#bdbdbd",
    shadowOpacity: 10,
    elevation: 2,
    // background color must be set
    backgroundColor: "#0000",
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    height: 70,
    width: 220,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    marginTop: 20,
    shadowColor: "#000000",
    elevation: 10,
  },
  item_pic: {
    aspectRatio: 1.2,
    width: 90,
  },
  item_plus: {
    flexDirection: "row",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginTop: 5,
  },
  name_price_tag: {
    flexDirection: "column",
    width: 70,
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingLeft: 15,
    backgroundColor: "#ffffff",
    height: 65,
    justifyContent: "space-around",
  },
  item_name: {
    marginBottom: 5,
    fontWeight: "600",
    fontSize: 14,
  },
  price: {
    fontWeight: "700",
    fontSize: 13,
    color: "#4CAD73",
  },
  unit: {
    color: "#bdbdbd",
    fontSize: 12,
  },
});
