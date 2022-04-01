import React, { FC } from "react";
import { View, Text } from "../components/Themed";
import {
  StyleSheet,
  Image,
} from "react-native";
import NumericInput from "react-native-numeric-input";

interface Props {
  name:string;
  price:number;
  unit:string;
  link:string;
}

const ItemCard: FC<Props> = (props) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.item}>
        <Image
          style={styles.item_pic}
          source={{uri:`${props.link}`}}
        />
        <View style={styles.item_tag_box}>
          <View style={styles.name_price_tag}>
            <Text style={styles.item_name}>{capitalize(`${props.name}`)}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>${props.price}</Text>
              <Text style={styles.unit}> / {props.unit}</Text>
            </View>
          </View>
          <View style={styles.item_plus}>
            <NumericInput
              onChange={(value) => console.log(value)}
              totalWidth={60}
              totalHeight={30}
              iconSize={25}
              valueType="integer"
              minValue={0}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function capitalize(str:string):string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    height: 185,
    width: 150,
    borderRadius: 10,
    marginTop: 20,
    overflow: "hidden",
    shadowColor: "#000000",
    elevation: 10,
  },
  item_pic: {
    aspectRatio: 3 / 2,
    height: 120,
  },
  item_tag_box: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height: 65,
    alignItems: "center",
    justifyContent: "space-around",
  },
  item_plus: {
    flexDirection: "row",
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  name_price_tag: {
    flexDirection: "column",
    width: 70,
    alignItems: "flex-start",
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
  shadow: {
    shadowOffset: { width: 3, height: 5 },
    shadowColor: "#bdbdbd",
    shadowOpacity: 10,
    elevation: 2,
    // background color must be set
    backgroundColor: "#0000",
  },
})

export default ItemCard;




