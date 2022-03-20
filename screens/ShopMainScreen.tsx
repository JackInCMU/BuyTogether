import React, { useReducer, useState } from 'react';
import { StyleSheet, Image,TextInput, ScrollView} from 'react-native';
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
            <View style={{flexDirection: 'row', backgroundColor: 'transparent', justifyContent:'flex-start',marginTop:5, width:250}}>
                    <Ionicons style={styles.locationbutton} name="location-outline" size={12} color="#085B26"/>
                    <Text style={styles.locationtext}>Sent to Fifth Avenue, 15213</Text>
            </View>
            <View style={{height:35, marginTop:15, borderBottomWidth:3, borderBottomColor:'#085B26', backgroundColor:'#ffffff'}}>
                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{backgroundColor:'#ffffff'}}>
                        <Text style={{fontWeight:'700',color:'#085B26',marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>Vegetables</Text>
                        <View style = {styles.highlight}></View>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Beverage</Text>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Snacks</Text>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Diary</Text>
                    </View>
                    <View style={{marginLeft:25, backgroundColor:'#ffffff', marginTop:5}}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{width:400,}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.item}>
                        <Image style = {styles.item_pic} source={require("../assets/images/chilli.jpeg")}/>

                        </View>
                        <View style={styles.item}>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={styles.item}>
                        </View>
                        <View style={styles.item}>
                        </View>
                    </View>
                </ScrollView>
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
        backgroundColor:'#ffffff', 
        width:250,
        height:36,
        borderWidth:1,
        borderColor:'#085B26',
        borderRadius:10,
        marginTop:8,   
    },
    locationbutton:{
        color: '#84A883',
    },
    locationtext:{
        color: '#84A883',
        textAlign: 'center',
        fontSize:12,
        paddingHorizontal:3,
    },
    highlight:{
        width: 66,
        height:5,
        marginLeft:30,
        marginTop:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        backgroundColor:'#085B26'
    },
    item:{
        flex:1,
        alignItems:'flex-start',
        height:185,
        width:155,
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginTop:25,
        marginLeft:30,
        overflow:'hidden'
    },
    item_pic:{
        aspectRatio: 3/3,
        height:50,
    }

});