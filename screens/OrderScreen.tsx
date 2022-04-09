import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScaleSize } from "react-native-scale-size";
import Color from "../constants/Color";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function OrderScreen() {
  const orders = [
    {
      merchant: "Walmart",
      order_date: "2020-04-01",
      total_price: "$20.98",
      status: "Ongoing",
      picUrl: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg",
    },
    {
      merchant: "7-11",
      order_date: "2020-04-03",
      total_price: "$6.98",
      status: "Delivered",
      picUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/2110px-7-eleven_logo.svg.png",
    },
    {
      merchant: "Walmart",
      order_date: "2020-04-02",
      total_price: "$15.98",
      status: "Fail",
      picUrl: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg",
    },
    {
      merchant: "Walmart",
      order_date: "2020-04-02",
      total_price: "$15.98",
      status: "Fail",
      picUrl: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <PromotionTab />
      <View style={styles.separator} />
      <ScrollView
        style={{
          width: 380,
          backgroundColor: "#ffffff",
          alignContent: "center",
          marginTop: 15,
        }}
      >
        {orders.map((order, index) => (
          <OrderItem order={order} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const OrderItem = (props) => {
  let statusTabColor = "#C4C4C4";
  if (props.order.status == "Completed") {
    statusTabColor = "#99DE9F";
  } else if (props.order.status == "Delivered") {
    statusTabColor = "#5EB670";
  } else if (props.order.status == "Fail") {
    statusTabColor = "#393939";
  }
  return (
    <TouchableOpacity>
      <View style={[styles.row, styles.item, { padding: 5 }]}>
        <View style={styles.storePartLeft}>
          <Image
            style={styles.shopAvatar}
            source={{ uri: props.order.picUrl }}
          />
        </View>
        <View style={styles.storePartRight}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[{ color: "#4A6563", fontSize: 24, fontWeight: "bold" }]}
            >
              {props.order.merchant}
            </Text>
            <View style={[styles.status, { backgroundColor: statusTabColor }]}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 14 }}
              >
                {props.order.status}
              </Text>
            </View>
          </View>
          <View style={styles.lineInStoreCard}></View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 15,
              marginLeft: 5,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              Order Date: {props.order.order_date}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>
              Total Price: {props.order.total_price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PromotionTab = () => {
  return (
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
          style={[{ color: "#4A6563", fontSize: 32, fontWeight: "normal" }]}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.themeColorGreen,
  },
  title: {
    color: "#085B26",
    fontSize: 24,
    paddingBottom: 1,
    fontWeight: "bold",
    marginBottom: 15,
    backgroundColor: Color.themeColorGreen,
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
  },
  storePartRight: {
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
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
  separator: {
    marginTop: 10,
    height: 2,
    backgroundColor: "#085B26",
  },
  status: {
    backgroundColor: Color.themeColorGreen,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 30,
    marginBottom: 5,
  },
});
