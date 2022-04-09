import React, { FC } from "react";
import { View, Text } from "../components/Themed";
import {Pressable, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Color from "../constants/Color";
import ForwardButton from "../components/ForwardButton"
import GreySeparator from "../components/GreySeparator"
import { useNavigation } from '@react-navigation/native';

type Nav = {
  navigate: (value: string) => void;
}



interface Props {
}
const ProfileBar: FC<Props> = (props) => {
  const { navigate } = useNavigation<Nav>()
  return (
    <View style={{ marginTop: 30 }}>
      <GreySeparator />
      <View style={styles.bar}>
        <MaterialIcons name="location-pin" size={24} color={Color.fontGreen} />
        <Pressable style={{ backgroundColor: Color.white, width: 250, marginLeft: 20 }}
        onPress={() => navigate("AddressEditScreen")}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: Color.fontGreen }}>Delivery Address</Text>
        </Pressable>
        <ForwardButton size={25} color={Color.fontGreen} />
      </View>
      <GreySeparator />

        <View style={styles.bar}>
          <Entypo name="credit-card" size={24} color={Color.fontGreen}/>
          <View style={{backgroundColor: Color.white, width: 250, marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: "700", color: Color.fontGreen}}>Payment Methods</Text>
          </View>
          <ForwardButton size={25} color={Color.fontGreen}/>
        </View>
        <GreySeparator/>

        <View style={styles.bar}>
          <MaterialIcons name="card-membership" size={24} color={Color.fontGreen}/>
          <View style={{backgroundColor: Color.white, width: 250, marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: "700", color: Color.fontGreen}}>Membership</Text>
          </View>
          <ForwardButton size={25} color={Color.fontGreen}/>
        </View>
        <GreySeparator/>

      <View style={styles.bar}>
        <MaterialIcons name="privacy-tip" size={24} color={Color.fontGreen} />
        <View style={{ backgroundColor: Color.white, width: 250, marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: Color.fontGreen }}>Privacy</Text>
        </View>
        <ForwardButton size={25} color={Color.fontGreen} />
      </View>
      <GreySeparator />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    width: 400,
    height: 60,
    alignItems: "center"

  }
})
export default ProfileBar;
