import React, { useReducer, useState } from 'react';
import { StyleSheet, Image,TextInput} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { View ,Text} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {ScaleSize} from 'react-native-scale-size';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
  
  

export default function ShopMainScreen({navigation}: RootTabScreenProps<'TabOne'>){
    return (
        <View style = {styles.container}>
            <View style = {{backgroundColor:'#BEE4BE',flexDirection:'row',width:150,justifyContent:'space-around'}}>
                <View style = {{backgroundColor:'#BEE4BE',marginTop:50}}>
                    <Image style = {styles.shop_icon} source={require("../assets/images/walmart.png")}/>
                </View>
                <View style = {{backgroundColor:'#BEE4BE',justifyContent:'center',marginTop:50}}>
                    <Text style = {styles.shop} >Walmart</Text>
                </View>
            </View >
            <View style ={styles.header}>
                <Ionicons name="chevron-back" size={30} color="#085B26" style= {{backgroundColor:'transparent', paddingTop:8, marginRight:12}}/>
                <View style = {styles.SearchBar}>
                    <Feather name="search" size={20} color="#bdbdbd" style ={{height:36, paddingTop:6, paddingLeft:6}}/>
                    <TextInput placeholder='search goods' style ={{backgroundColor:'transparent', marginLeft:5, fontSize:14}}></TextInput>
                </View>
                <AntDesign name="shoppingcart" size={30} color="#085B26" style = {{height:36, paddingTop:9, paddingLeft:18}} />

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#BEE4BE',
    },
    shop: {
        color:'#085B26',
        fontWeight:'700',
        fontSize:24,
    },
    shop_icon:{
        width:30,
        height:30,
        borderRadius:ScaleSize(15),
        resizeMode:'cover',
    },
    header:{
        backgroundColor:'transparent',
        flexDirection:'row',
        width:350,
    },
    SearchBar:{
        flexDirection:'row', 
        justifyItems:'center',
        backgroundColor:'#ffffff', 
        width:250,
        height:36,
        borderWidth:1,
        borderColor:'#085B26',
        borderRadius:10,
        marginTop:8,   
    },
});