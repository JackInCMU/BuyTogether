import React from "react";
import { StyleSheet, Image, Button, Alert} from 'react-native';
import { View, Text} from "../components/Themed";
import { Ionicons } from '@expo/vector-icons'; 

export default function CartScreen() {
    return(
        <View style={styles.container}>
            <Ionicons style={styles.backbutton} name="chevron-back" size={30} color="#085B26"/>
            <Text style={styles.title}>Shopping Cart</Text>
            <View style={styles.row}>
                <Ionicons style={styles.locationbutton} name="location-outline" size={12} color="#085B26"/>
                <Text style={styles.locationtext}>Sent to Fifth Avenue, 15213</Text>
            </View>
            <View style={styles.separator} lightColor="#085B26" darkColor="#085B26"/>
            <View style={styles.content}>
                <View style={[styles.row, {padding: 15, justifyContent:'flex-start'}]}>
                    <Image style={styles.avatar} source={require("../assets/images/pink-avatar.jpg")} />
                    <Text style={{fontSize:20, paddingLeft:20, alignSelf:'center', color:'#085B26'}}>Angelica</Text>
                </View>
                {/* seperator line */}
                <View style={{height:1}} lightColor="#DADADA" darkColor="#DADADA"/>
                <View style={styles.row}>
                    <Text>Chili Row</Text>
                </View>
                <View style={styles.row}>
                    <Text>Spinach Row</Text>
                </View>
                {/* receipt */}
                <View style={[styles.row, {paddingHorizontal:40}]}>
                    <Text style={[{flex:1}, styles.receiptText]}>Subtotal</Text>
                    <Text style={styles.receiptText}>$3.96</Text>
                </View>
                <View style={[styles.row, {paddingHorizontal:40}]}>
                    <Text style={[{flex:1}, styles.receiptText]}>Delivery</Text>
                    <Text style={styles.receiptText}>$0.04</Text>
                </View>
                <View style={[styles.row, {paddingHorizontal:40}]}>
                    <Text style={[{flex:1}, styles.receiptText]}>Total</Text>
                    <Text style={styles.receiptText}>$4.00</Text>
                </View>
                {/* checkout button */}
                <View style={styles.checkoutButton}>
                    <Button
                        onPress={() => Alert.alert("Check Out!")}
                        title="Check Out"
                        color='white'
                    />
                </View>
                {/* seperator line */}
                <View style={{height:1}} lightColor="#DADADA" darkColor="#DADADA"/>
                <Text>Rebecca</Text>
                {/* seperator line */}
                <View style={{height:1}} lightColor="#DADADA" darkColor="#DADADA"/>
                <Text>Jerry</Text>
            
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BEE4BE',
      paddingTop:50,
    },
    row: {
        flexDirection:'row',
        backgroundColor:'transparent',
        justifyContent:'center',
    },
    backbutton: {
        paddingTop: 50,
        marginLeft: 20,
        position:'absolute'
      },
    title: {
        color:"#085B26",
        fontSize:24,
        paddingBottom:1,
        fontWeight:"bold",
        textAlign:"center",
        alignItems:'center',
        justifyContent:'center',
    },
    locationtext: {
        color:'#84A883',
        textAlign:'center',
        fontSize:12,
        paddingHorizontal:3,
    },
    locationbutton: {
        color:'#84A883',
    },
    separator: {
        marginTop: 10,
        height: 2,
    },
    content: {
        flex:1,
    },
    avatar: {
        width:50,
        height:50,
        marginLeft:10,
    },
    receiptText: {
        fontSize:20,
    },
    checkoutButton: {
        backgroundColor:'#085B26',
        width:'35%',
        alignSelf:'center',
        borderRadius: 10,
        margin:20,
    }
  });
  