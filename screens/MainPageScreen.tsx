import React, { useReducer, useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { View, Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ScaleSize } from "react-native-scale-size";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import color from "../constants/Color";
import DefaultAvatar from "../components/DefaultAvatar";
import Color from "../constants/Color";
import { TouchableOpacity } from "react-native-gesture-handler";
import Headers from "../components/Headers";

export default function MainPageScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#BEE4BE",
          flexDirection: "row",
          width: 150,
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "#BEE4BE",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
            <Headers/>
        </View>
      </View>

      <View style={styles.header}>

        <View style={styles.SearchBar}>
          <Feather
            name="search"
            size={20}
            color="#bdbdbd"
            style={{ height: 36, paddingTop: 6, paddingLeft: 6 }}
          />
          <TextInput
            placeholder="search for shops..."
            style={{
              backgroundColor: "transparent",
              marginLeft: 5,
              fontSize: 14,
            }}
          ></TextInput>
        </View>
        <Pressable onPress={() => navigation.navigate("CartScreen")}>
          <AntDesign
            name="shoppingcart"
            size={30}
            color="#085B26"
            style={{ height: 36, paddingTop: 9, paddingLeft: 6 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "transparent",
          justifyContent: "flex-start",
          marginTop: 5,
          width: 250,
        }}
      >
        <Ionicons
          style={styles.locationbutton}
          name="location-outline"
          size={12}
          color="#085B26"
        />
        <Text style={styles.locationtext}>
          Sent to Fifth Avenue, 15213{"\n"}
        </Text>
      </View>

      <View
        style={[
          styles.row,
          { padding: 5, justifyContent: "flex-start" },
          { backgroundColor: "#84A883", borderRadius: 15, width: 340 },
        ]}
      >
        <View style={styles.partLeft}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/promotion.png")}
          />
        </View>
        <View style={styles.partRight}>
          <Text
            style={[
              { color: "#4A6563", fontSize: 32, fontWeight: "normal" },
              styles.storeTitle,
            ]}
          >
            Get Your
          </Text>

          <View
            style={[styles.row, { padding: 1, justifyContent: "flex-start" }]}
          >
            <Text
              style={{
                color: "#4A6563",
                fontSize: 60,
                fontWeight: "bold",
                alignSelf: "flex-end",
                paddingLeft: 10,
              }}
            >
              20%
            </Text>
            <Text
              style={{
                color: "#4A6563",
                fontSize: 32,
                fontWeight: "normal",
                paddingLeft: 10,
                paddingBottom: 1,
              }}
            >
              off
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 35,
          marginTop: 15,
          borderBottomWidth: 3,
          borderBottomColor: "#085B26",
          backgroundColor: "#BEE4BE",
        }}
      >
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ backgroundColor: "#BEE4BE" }}>
            <Text
              style={{
                fontWeight: "900",
                color: "#085B26",
                marginLeft: 25,
                backgroundColor: "#BEE4BE",
                marginTop: 5,
              }}
            >
              Groceries
            </Text>
            <View style={styles.highlight}></View>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>
              Convenience
            </Text>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>
              Beverage
            </Text>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>Foods</Text>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>Foods</Text>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>Diary</Text>
          </View>
          <View
            style={{ marginLeft: 25, backgroundColor: "#BEE4BE", marginTop: 5 }}
          >
            <Text style={{ fontWeight: "700", color: "#085B26" }}>Fruits</Text>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          width: 380,
          backgroundColor: "#ffffff",
          alignContent: "center",
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ShopMainScreen")}
          >
            <View
              style={[
                styles.row,
                styles.item,
                { padding: 5, justifyContent: "flex-start" },
              ]}
            >
              <View style={styles.storePartLeft}>
                <Image
                  style={styles.shopAvatar}
                  source={require("../assets/images/walmart.png")}
                />
              </View>
              <View style={styles.storePartRight}>
                <Text
                  style={[
                    { color: "#4A6563", fontSize: 24, fontWeight: "bold" },
                    styles.storeTitle,
                  ]}
                >
                  Walmart
                </Text>
                <View style={styles.lineInStoreCard}></View>

                <View
                  style={[
                    styles.row,
                    { padding: 1, justifyContent: "flex-start" },
                  ]}
                >
                  <Text
                    style={[
                      { color: "#4A6563", fontSize: 18, fontWeight: "normal" },
                      styles.buyWithText,
                    ]}
                  >
                    Buy with:{" "}
                  </Text>
                  <DefaultAvatar
                    backgroundColor="#DDF44B"
                    height={20}
                    width={20}
                    marginLeft={5}
                  />
                  <DefaultAvatar
                    backgroundColor="#F9D9D2"
                    height={20}
                    width={20}
                    marginLeft={5}
                  />

                  <AntDesign
                    name="pluscircleo"
                    size={20}
                    color="#4A6563"
                    style={styles.buyWithAvatar}
                  />
                </View>
                <View
                  style={[
                    styles.row,
                    { padding: 1, justifyContent: "flex-start" },
                  ]}
                >
                  <Card containerStyle={styles.startFrom}>
                    <Text style={{ color: "#085B26" }}>Start from:</Text>
                  </Card>
                  <Text
                    style={[
                      { color: "#AD4C4C", fontWeight: "normal" },
                      styles.startWith,
                    ]}
                  >
                    $25
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.row,
              styles.item,
              { padding: 5, justifyContent: "flex-start" },
            ]}
          >
            <View style={styles.storePartLeft}>
              <Image
                style={styles.shopAvatar}
                source={require("../assets/images/711.jpeg")}
              />
            </View>
            <View style={styles.storePartRight}>
              <Text
                style={[
                  { color: "#4A6563", fontSize: 24, fontWeight: "bold" },
                  styles.storeTitle,
                ]}
              >
                Seven-eleven
              </Text>
              <View style={styles.lineInStoreCard}></View>

              <View
                style={[
                  styles.row,
                  { padding: 1, justifyContent: "flex-start" },
                ]}
              >
                <Text
                  style={[
                    { color: "#4A6563", fontSize: 18, fontWeight: "normal" },
                    styles.buyWithText,
                  ]}
                >
                  Buy with:{" "}
                </Text>
                <DefaultAvatar
                  backgroundColor="#8380FF"
                  height={20}
                  width={20}
                  marginLeft={5}
                />
                <DefaultAvatar
                  backgroundColor="#E92B2B"
                  height={20}
                  width={20}
                  marginLeft={5}
                />
                <AntDesign
                  name="pluscircleo"
                  size={20}
                  color="#4A6563"
                  style={styles.buyWithAvatar}
                />
              </View>
              <View
                style={[
                  styles.row,
                  { padding: 1, justifyContent: "flex-start" },
                ]}
              >
                <Card containerStyle={styles.startFrom}>
                  <Text style={{ color: "#085B26" }}>Start from:</Text>
                </Card>
                <Text
                  style={[
                    { color: "#AD4C4C", fontWeight: "normal" },
                    styles.startWith,
                  ]}
                >
                  $25
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.row,
              styles.item,
              { padding: 5, justifyContent: "flex-start" },
            ]}
          >
            <View style={styles.storePartLeft}>
              <Image
                style={styles.shopAvatar}
                source={require("../assets/images/walmart.png")}
              />
            </View>
            <View style={styles.storePartRight}>
              <Text
                style={[
                  { color: "#4A6563", fontSize: 24, fontWeight: "bold" },
                  styles.storeTitle,
                ]}
              >
                Walmart
              </Text>
              <View style={styles.lineInStoreCard}></View>

              <View
                style={[
                  styles.row,
                  { padding: 1, justifyContent: "flex-start" },
                ]}
              >
                <Text
                  style={[
                    { color: "#4A6563", fontSize: 18, fontWeight: "normal" },
                    styles.buyWithText,
                  ]}
                >
                  Buy with:{" "}
                </Text>
                <DefaultAvatar
                  backgroundColor="#B78899"
                  height={20}
                  width={20}
                  marginLeft={5}
                />
                <DefaultAvatar
                  backgroundColor="#00A198"
                  height={20}
                  width={20}
                  marginLeft={5}
                />
                <AntDesign
                  name="pluscircleo"
                  size={20}
                  color="#4A6563"
                  style={styles.buyWithAvatar}
                />
              </View>
              <View
                style={[
                  styles.row,
                  { padding: 1, justifyContent: "flex-start" },
                ]}
              >
                <Card containerStyle={styles.startFrom}>
                  <Text style={{ color: "#085B26" }}>Start from:</Text>
                </Card>
                <Text
                  style={[
                    { color: "#AD4C4C", fontWeight: "normal" },
                    styles.startWith,
                  ]}
                >
                  $25
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#BEE4BE",
  },
  smallTitle: {
    color: "#085B26",
    fontWeight: "700",
    fontSize: 14,
  },
  shop_icon: {
    width: 30,
    height: 30,
    borderRadius: ScaleSize(15),
    resizeMode: "cover",
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: 350,
  },
  SearchBar: {
    flexDirection: "row",
    // justifyItems:'center',
    backgroundColor: "#ffffff",
    width: 300,
    marginLeft:10,
    height: 36,
    borderWidth: 1,
    borderColor: "#085B26",
    borderRadius: 10,
    marginTop: 8,
  },
  locationbutton: {
    color: "#84A883",
      marginLeft:6
  },

  locationtext: {
    color: "#4A6563",
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 3,marginLeft:2,
  },

  card_container: {
    color: "#844",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 2,
    width: 300,
    height: 140,
  },

  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: "left",
    color: "#34495e",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    color: "#84A903",
  },
  avatar: {
    width: 120,
    height: 120,
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  partLeft: {
    padding: 1,
    flex: 2,
    backgroundColor: "#84A883",
  },
  partRight: {
    flex: 3,
    backgroundColor: "#84A883",
  },

  highlight: {
    width: 66,
    height: 5,
    marginLeft: 30,
    marginTop: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#085B26",
  },
  item: {
    flex: 1,
    alignItems: "flex-start",
    height: 130,
    width: 320,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginTop: 25,
    marginLeft: 30,
    overflow: "hidden",
  },
  shopAvatar: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    borderRadius: ScaleSize(150),
    resizeMode: "cover",
    marginTop: 12,
  },
  storePartLeft: {
    padding: 1,
    flex: 3,
  },
  storePartRight: {
    padding: 1,
    flex: 7,
  },
  lineInStoreCard: {
    width: 200,
    height: 2,
    marginLeft: 4,
    marginTop: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#C4C4C4",
  },
  buyWithLeft: {
    padding: 1,
    flex: 3,
  },
  buyWithRight: {
    padding: 3,
    flex: 4,
  },
  buyWithAvatar: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  startFrom: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#BEE4BE",
    opacity: 0.8,
    marginLeft: 7,
    padding: 3,
    margin: 3,
    borderRadius: 10,
  },
  storeTitle: {
    paddingLeft: 10,
    marginTop: 10,
  },
  buyWithText: {
    paddingLeft: 10,
    marginTop: 0,
  },
  startWith: {
    paddingLeft: 10,
    marginTop: 8,
  },
});
