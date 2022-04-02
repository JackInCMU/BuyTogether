import React, {useState} from "react";
import {StyleSheet, Image, Button, Alert, Pressable, TextInput} from "react-native";
import { View, Text } from "../components/Themed";
import { Feather, Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";
import GreySeparator from "../components/GreySeparator";
import DefaultAvatar from "../components/DefaultAvatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";
import ModalDropdown from 'react-native-modal-dropdown';
import {Card} from "react-native-elements";
import {RootTabScreenProps} from "../types";




export default function CartScreen({
                                     navigation,
                                   }: RootTabScreenProps<"TabOne">) {
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
            <Text style={styles.smalltitle}>BuyTogether</Text>
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

        <View style={styles.separator} lightColor={Color.themeColorGreen} darkColor="#085B26" />
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


          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.shadow}>
              <View style={styles.item}>

                <ModalDropdown
                    options={['United States', 'China','Canada','UK']}
                    style={styles.dropdown}
                    // dropdownStyle={styles.dropdownList}
                    dropdownTextStyle={styles.dropdownText}
                    dropdownTextHighlightStyle={{color:Color.fontGreen}}
                    defaultValue={'Please select...'}
                    textStyle={styles.dropdownText}>
                </ModalDropdown>


                {/*<View style={styles.name_price_tag}>*/}
                {/*  <Text style={styles.item_name}>United States</Text>*/}
                {/*</View>*/}
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

            </View>

          </View>


          <Text style={styles.addrtitle}>Full Name (First and Last Name)</Text>
          <TextInput style={styles.input}
                     placeholderTextColor = "#c4c4c4"
                     placeholder='Full Name'>
          </TextInput>

          <Text style={styles.addrtitle}>Phone number</Text>
          <TextInput style={styles.input}
                     placeholderTextColor = "#c4c4c4"
                     placeholder='+1 XXX XXX XXXX'>
          </TextInput>

          <Text style={styles.addrtitle}>Address</Text>
          <TextInput style={styles.inputAddrLine1}
                     placeholderTextColor = "#c4c4c4"
                     placeholder='Street address or P.O. Box'>
          </TextInput>
          <TextInput style={styles.inputAddrLine2}
                     placeholderTextColor = "#c4c4c4"
                     placeholder='Apt, Suite, Unit, Building (optional)'>
          </TextInput>


          <Text style={styles.addrtitle}>City</Text>
          <TextInput style={styles.input}
                     placeholderTextColor = "#c4c4c4"
                     placeholder='city'>
          </TextInput>

          <View
              style={[
                styles.row,
                { padding: 1, justifyContent: "flex-start" },
              ]}
          >
            <Text
                style={styles.addrtitleLeft}
            >
              State
            </Text>
            <Text
                style={styles.addrtitleRight}
            >
              ZIP Code
            </Text>
          </View>


          <View
              style={[
                styles.row,
                { padding: 1, justifyContent: "flex-start" },
              ]}
          >
            <View style={styles.shadow}>
              <View style={styles.smallItem}>

                <ModalDropdown
                    options={['PA', 'CA','MA','NY']}
                    style={styles.dropdown}
                    // dropdownStyle={styles.dropdownList}
                    dropdownTextStyle={styles.dropdownText}
                    dropdownTextHighlightStyle={{color:Color.fontGreen}}
                    defaultValue={'Please select...'}
                    textStyle={styles.dropdownText}>
                </ModalDropdown>

              </View>
            </View>

            <TextInput style={styles.smallInput}
                       placeholderTextColor = "#c4c4c4"
                       placeholder=''>
            </TextInput>

          </View>




          {/* save button */}
          <View style={styles.checkoutButton}>
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
    paddingBottom: 1,
    fontWeight: "bold",
    // textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    marginLeft: 24,
    marginTop: 18,

  },
  addrtitleRight: {
    color: Color.fontGreen,
    fontSize: 16,
    paddingBottom: 1,
    fontWeight: "bold",
    // textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    marginLeft: 125,
    marginTop: 18,

  },
  addrtitleLeft: {
    color: Color.fontGreen,
    fontSize: 16,
    paddingBottom: 1,
    fontWeight: "bold",
    // textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    marginLeft: 24,
    marginTop: 18,

  },
  smalltitle: {
    color: Color.fontGreen,
    fontSize: 16,
    paddingBottom: 1,
    fontWeight: "bold",
    // textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    marginLeft: 80,
    marginTop: 6,
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
  checkoutButton: {
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
  smallTitle: {
    color: Color.fontGreen,
    fontWeight: "bold",
    padding: 5,
    fontSize: 16,
  },
  shadow: {
    paddingLeft: 20,
    marginTop:1,
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
    height: 40,
    width: 320,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    marginTop: 3,
    marginLeft: 3,
    shadowColor: "#000000",
    elevation: 10,
  },
  smallItem: {
    flexDirection: "row",
    height: 40,
    width: 140,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    marginTop: 3,
    marginLeft: 3,
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
  dropdown: {
    flexDirection: "column",
    width: 1000,
    alignItems: "flex-start",
    paddingVertical: 0,
    paddingLeft: 15,
    backgroundColor: "#f2f2f2",
    height: 45,
    justifyContent: "space-around",

  },
  dropdownList: {
    flexDirection: "column",
    width: 120,
    alignItems: "flex-start",
    paddingVertical: 0,
    paddingLeft: 0,
    paddingTop:8,
    backgroundColor: "#f2f2f2",
    height: 125,
    justifyContent: "space-around",

  },
  dropdownText: {
    marginBottom: 0,
    fontWeight: "400",
    fontSize: 16,
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
  input: {
    marginTop: 3,
    paddingLeft:8,
    height: 40,
    width: 320,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 24,
  },
  smallInput: {
    marginTop: 3,
    paddingLeft:8,
    height: 40,
    width: 150,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 16,
  },
  inputAddrLine1: {
    marginVertical: 0,
    paddingLeft:8,
    height: 40,
    width: 320,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 24,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },
  inputAddrLine2: {
    marginVertical: 0,
    paddingLeft:8,
    height: 40,
    width: 320,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 24,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
  },
});
