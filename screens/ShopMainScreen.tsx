import React from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { View, Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ScaleSize } from "react-native-scale-size";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReturnButton from "../components/ReturnButton";
import ShoppingCart from "../components/ShopingCart";
import ItemCard from "../components/ItemCard";
import Color from "../constants/Color";


export default function ShopMainScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Color.themeColorGreen,
          flexDirection: "row",
          width: 150,
          justifyContent: "space-around",
        }}
      >
        <View style={{ backgroundColor: Color.themeColorGreen, marginTop: 50 }}>
          <Image
            style={styles.shop_icon}
            source={require("../assets/images/walmart.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: Color.themeColorGreen,
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Text style={styles.shop}>Walmart</Text>
        </View>
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ReturnButton size={30} color={Color.fontGreen} />
        </TouchableOpacity>

        <View style={styles.SearchBar}>
          <Feather
            name="search"
            size={20}
            color="#bdbdbd"
            style={{ height: 36, paddingTop: 6, paddingLeft: 6 }}
          />
          <TextInput
            placeholder="search goods"
            style={{
              backgroundColor: "transparent",
              marginLeft: 5,
              fontSize: 14,
            }}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("CartScreen")}>
          <ShoppingCart size={30} color={Color.fontGreen} />
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
          color={Color.fontGreen}
        />
        <Text style={styles.locationtext}>Sent to Fifth Avenue, 15213</Text>
      </View>
      <View
        style={{
          height: 35,
          marginTop: 15,
          borderBottomWidth: 3,
          borderBottomColor: Color.fontGreen,
          backgroundColor: "#ffffff",
        }}
      >
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ backgroundColor: "#ffffff" }}>
            <Text style={styles.category}>Vegetables</Text>
            <View style={styles.highlight}></View>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>Fruits</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>
              Beverage
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>Snacks</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>Fruits</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>Diary</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", color: Color.fontGreen }}>Fruits</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "transparent",
            }}
          >
            <ItemCard name={"carrot"} price={0.99} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/carrot.jpeg?alt=media&token=51c2949e-7ca5-4336-88a2-a2e88aada1f2'} />
            <ItemCard name={"chilli"} price={0.99} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/chilli.jpeg?alt=media&token=fa816f48-ff7a-47c0-9294-b7ddda59964f'} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "transparent",
            }}
          >
            <ItemCard name={"onion"} price={0.8} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/onion.jpeg?alt=media&token=6db5db2a-4688-4794-adf2-eceac2ada11b'} />
            <ItemCard name={"cucumber"} price={0.99} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/cucumber.jpeg?alt=media&token=08131dd6-e988-4b78-bc26-6e7262f72db7'} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "transparent",
            }}
          >
            <ItemCard name={"carrot"} price={0.99} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/carrot.jpeg?alt=media&token=51c2949e-7ca5-4336-88a2-a2e88aada1f2'} />
            <ItemCard name={"chilli"} price={0.99} unit={"lb"} link={'https://firebasestorage.googleapis.com/v0/b/buytogether-88aa7.appspot.com/o/chilli.jpeg?alt=media&token=fa816f48-ff7a-47c0-9294-b7ddda59964f'} />
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
    backgroundColor: Color.themeColorGreen,
  },
  shop: {
    color: Color.fontGreen,
    fontWeight: "700",
    fontSize: 24,
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
    backgroundColor: "#ffffff",
    width: 250,
    height: 36,
    borderWidth: 1,
    borderColor: Color.fontGreen,
    borderRadius: 10,
    marginTop: 8,
  },
  locationbutton: {
    color: Color.addressGreen,
  },
  locationtext: {
    color: Color.addressGreen,
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 3,
  },
  category: {
    fontWeight: "700",
    color: Color.fontGreen,
    marginLeft: 25,
    backgroundColor: "#ffffff",
    marginTop: 5,
  },
  highlight: {
    width: 66,
    height: 5,
    marginLeft: 30,
    marginTop: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Color.fontGreen,
  },
});
