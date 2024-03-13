import { View, Text , SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const policies = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
           <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>PradhanMantri Ayushman Yojna Card</Text>
      </View>
      
      <Text style={{marginLeft:Utils.ScreenWidth(3), fontSize:Utils.ScreenHeight(2)}}></Text>
    
      <Image source={ImagesPath.home.yojna} style={{ height: Utils.ScreenHeight(40), width: Utils.ScreenWidth(100), resizeMode: "contain" }} />
      <View style={{backgroundColor:colors.white, height:"100%"}}></View>
    </SafeAreaView>
  )
}

export default policies 