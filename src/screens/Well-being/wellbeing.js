import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const wellbeing = () => {

  const navigation = useNavigation();

  return (
    <View>
    <ScrollView>

      
      <TouchableOpacity
    onPress={()=>{navigation.navigate("Xray")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(5),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6859/6859923.png"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Detect Plant Diseases</Text>

    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{navigation.navigate("Skin")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/5341/5341375.png"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Crop Recommendations</Text>

    </TouchableOpacity>

   

   




    <TouchableOpacity
    onPress={()=>{navigation.navigate("policies")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://img.freepik.com/free-vector/woman-with-kid-consulting-doctor_74855-4587.jpg?w=740&t=st=1696582121~exp=1696582721~hmac=a639219472556f45fcc078f93ed70ad7f1f73a75c5cf36a2966434a3ac544475"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Government Schemes</Text>

    </TouchableOpacity>
   


    

    {/* <TouchableOpacity
    onPress={()=>{navigation.navigate("StartInterview")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient-illustration_23-2148863748.jpg?size=626&ext=jpg&uid=R111949587&semt=ais"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, maxWidth: '60%'}}>Vaccination/ Treatment Centers</Text>

    </TouchableOpacity> */}
    </ScrollView>
    </View>
  )
}

export default wellbeing