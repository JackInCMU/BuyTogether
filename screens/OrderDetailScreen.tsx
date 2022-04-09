import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { RandomAvatar } from "../components/DefaultAvatar";
import { SafeAreaView } from "react-native-safe-area-context";
import ReturnButton from "../components/ReturnButton";
import GreySeparator from "../components/GreySeparator";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Color from "../constants/Color";

export default function OrderDetailScreen({ navigation }) {
  const items = [
    {
      name: "Chili",
      price: 0.99,
      quantity: 1,
      unit: "lb",
    },
    {
      name: "Spinach",
      price: 1.99,
      quantity: 2,
      unit: "lb",
    },
    {
      name: "Coke",
      price: 4.99,
      quantity: 1,
      unit: "btl",
    },
    {
      name: "banana",
      price: 3.99,
      quantity: 10,
      unit: "lb",
    },
    {
      name: "apple",
      price: 2.99,
      quantity: 1,
      unit: "lb",
    },
  ];

  const [userStatus, setUserStatus] = React.useState({
    name: "David",
    status: "Ongoing",
  });

  const [summaryData, setSummaryData] = React.useState({
    subTotal: 0,
    taxes: 0,
    delivery: 0,
    tip: 0,
    total: 0,
  });

  const statusList = [
    {
      name: "Jerry",
      status: "Ongoing",
    },
    {
      name: "Sam",
      status: "Completed",
    },
    {
      name: "Linda",
      status: "Ongoing",
    },
    {
      name: "David",
      status: "Ongoing",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ width: 75, flex: 1, marginLeft: 15 }}
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        >
          <ReturnButton size={30} color={"#085B26"} />
        </TouchableOpacity>
        <Text style={styles.title}>Order Detail</Text>
      </View>

      <View style={styles.separator} />

      <ScrollView
        style={{
          width: 380,
          height: 650,
          backgroundColor: "#ffffff",
          alignContent: "center",
        }}
      >
        <StatusTab userInfo={userStatus} />
        <GreySeparator />
        <ScrollView
          style={{
            maxHeight: 400,
          }}
        >
          {items.map((item, index) => (
            <ItemTab item={item} key={index} />
          ))}
          <SummaryTab data={summaryData} />
        </ScrollView>
        <View style={styles.separator} />
        {statusList.map((status, index) => {
          if (
            status.name != userStatus.name &&
            userStatus.status == "Ongoing"
          ) {
            return <StatusTab userInfo={status} key={index} />;
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const SummaryTab = (props) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        margin: 15,
      }}
    >
      {Object.entries(props.data).map((key, index) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
            padding: 2,
          }}
          key={index}
        >
          <Text style={{ fontSize: 17, fontWeight: "400" }}>{key[0]}</Text>
          <Text style={{ fontSize: 17, fontWeight: "400", marginRight: 25 }}>
            $ {key[1].toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const ItemTab = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.shadow}>
        <View style={styles.item}>
          <Image
            style={styles.item_pic}
            source={require("../assets/images/chilli.jpeg")}
          />
          <View style={styles.name_price_tag}>
            <Text style={styles.item_name}>{props.item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>${props.item.price}</Text>
              <Text style={styles.unit}> / {props.item.unit}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "700" }}>
          Qty : {props.item.quantity}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "700" }}>
          $ {(props.item.quantity * props.item.price).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const StatusTab = (props) => {
  let statusTabColor = "#C4C4C4";
  if (props.userInfo.status == "Completed") {
    statusTabColor = "#99DE9F";
  } else if (props.userInfo.status == "Delivered") {
    statusTabColor = "#5EB670";
  } else if (props.userInfo.status == "Fail") {
    statusTabColor = "#393939";
  }
  return (
    <>
      <GreySeparator />
      <View
        style={[styles.row, { padding: 10, justifyContent: "space-between" }]}
      >
        <RandomAvatar />
        <Text
          style={{
            fontSize: 20,
            flex: 1,
            paddingLeft: 20,
            alignSelf: "center",
            color: "#085B26",
          }}
        >
          {props.userInfo.name}
        </Text>
        <View
          style={[
            styles.buyStatus,
            {
              backgroundColor: statusTabColor,
            },
          ]}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 14 }}>
            {props.userInfo.status}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BEE4BE",
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
  row: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
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
    height: 70,
  },
  name_price_tag: {
    paddingVertical: 15,
    paddingLeft: 15,
    backgroundColor: "#ffffff",
    height: 70,
    width: 90,
    borderRadius: 10,
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
  separator: {
    marginTop: 10,
    height: 2,
    backgroundColor: "#085B26",
  },
  title: {
    color: "#085B26",
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: Color.themeColorGreen,
    marginLeft: 20,
  },
});
