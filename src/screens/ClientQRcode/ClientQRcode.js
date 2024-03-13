import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

const ClientQRcode = () => {
  return (
    //    <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:colors.white}}>
    //   <Text>test</Text>
    //   <QRCode
    //   value="04923809"
    // />
    // </View>
    <SafeAreaView style={{ backgroundColor: colors.primary }}>

      {/* <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.primary,
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.white, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" , color:colors.white}}>Your QR code</Text>
      </View> */}

      <View style={{  backgroundColor: colors.primary , alignItems:"center", paddingTop:Utils.ScreenHeight(10)}}>
       <View style={{backgroundColor:colors.white, paddingVertical:Utils.ScreenHeight(4), paddingHorizontal:Utils.ScreenWidth(10) , borderRadius:15}}>
        <QRCode
          value="1"
          size={200}
        />
        <Text style={{fontSize:20, textAlign:"center", marginTop:Utils.ScreenHeight(2), }}>@VISHESHGATHA</Text>
        </View>
      </View>

      <Text style={{fontSize:25, textAlign:"center", marginTop:Utils.ScreenHeight(2),color:colors.white, marginHorizontal:Utils.ScreenWidth(5) }}>Share this QR with your health consultant to share your medical data.</Text>
    <View style={{height:Utils.ScreenHeight(100), backgroundColor:colors.primary}}>

    </View>
    </SafeAreaView>
  )
}

export default ClientQRcode


// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'


// const test = () => {
//   return (
//     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
//       <Text>test</Text>
//       <QRCode
//       value="04923809"
//     />
//     </View>

//   )
// }