import React from 'react';
import { StyleSheet, Image,TextInput, ScrollView} from 'react-native';
import { View ,Text} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {ScaleSize} from 'react-native-scale-size';
import { Feather } from '@expo/vector-icons';
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
                    <TextInput placeholder='search goods' style ={{backgroundColor: 'transparent', marginLeft: 5, fontSize: 14}}/>
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
                        <Text style={styles.category}>Vegetables</Text>
                        <View style = {styles.highlight}></View>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Beverage</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Snacks</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Diary</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontWeight:'700',color:'#085B26'}}>Fruits</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly', backgroundColor:'transparent'}}>
                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/carrot.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Carrots</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="plus-square" size={35} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/chilli.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Chilli</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="minus-square" size={20} color="#4CAD73"/>
                                        <Text style={{backgroundColor:'#d6ecdf',width:20, textAlign:'center'}}>4</Text>
                                        <Feather name="plus-square" size={20} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-evenly', backgroundColor:'transparent'}}>
                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/onion.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Onion</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="plus-square" size={35} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/cucumber.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Cucumber</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="plus-square" size={35} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',justifyContent:'space-evenly', backgroundColor:'transparent'}}>
                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/carrot.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Carrots</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="plus-square" size={35} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.shadow}>
                            <View style={styles.item}>
                                <Image style = {styles.item_pic} source={require("../assets/images/chilli.jpeg")}/>
                                <View style = {styles.item_tag_box}>
                                    <View style={styles.name_price_tag}>
                                        <Text style={styles.item_name}>Chilli</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.price}>$0.99</Text><Text style={styles.unit}> / lb</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.item_plus}>
                                        <Feather name="minus-square" size={20} color="#4CAD73"/>
                                        <Text style={{backgroundColor:'#d6ecdf',width:20, textAlign:'center'}}>4</Text>
                                        <Feather name="plus-square" size={20} color ='#4CAD73'/>
                                    </View>
                                </View>
                            </View>
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
    category:{
        fontWeight:'700',
        color:'#085B26',
        marginLeft:25,
        backgroundColor:'#ffffff',
        marginTop:5,
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
        flexDirection:'column',
        height:185,
        width:150,
        borderRadius:10,
        marginTop:20,
        overflow:'hidden',
        shadowColor: '#000000',
        elevation:10,
    },
    item_pic:{
        aspectRatio: 3/2,
        height:120,
    },
    item_tag_box:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        height:65,
        alignItems:'center',
        justifyContent:'space-around'
    },
    item_plus:{
        flexDirection:'row',
        width:60,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
    name_price_tag:{
        flexDirection:'column',
        width:70,
        alignItems:'flex-start'
    },
    item_name:{
        marginBottom:5,
        fontWeight:'600',
        fontSize:14,
    },
    price:{
        fontWeight:'700',
        fontSize:13,
        color:'#4CAD73'
    },
    unit:{
        color:'#bdbdbd',
        fontSize:12,
    },
    shadow:{
        shadowOffset: { width: 3, height: 5},
        shadowColor: '#bdbdbd',
        shadowOpacity: 10,
        elevation: 2,
        // background color must be set
        backgroundColor : "#0000"
    },
});
