import React, {FC} from "react";
import { View, Text,} from "../components/Themed";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Color from "../constants/Color";
interface Props {
  credit:number;
}
const VipBar: FC<Props> = (props) => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-around",alignItems:"center",backgroundColor:Color.fontGreen,width:330, height:90, borderRadius:20,marginTop:10}}>
      <View style={{backgroundColor:Color.fontGreen}}>
        <Text style={{fontSize:22, color:Color.white, fontWeight:"700",marginBottom:10, marginRight:50}}>VIP Member</Text>
        <Text style={{fontSize:15, color:Color.white}}>{props.credit} points</Text>
      </View>
      <View style={{backgroundColor:Color.fontGreen}}>
      <MaterialCommunityIcons name="crown-outline" size={40} color={Color.crownYellow} />
      </View>
    </View>
  )
}
export default VipBar;