import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import { useContract, useContractRead } from "@thirdweb-dev/react-native";
const test = () => {
  const navigation = useNavigation()


const { contract } = useContract("0xbef3d2900324345D698d2eA583e952Ccb9E2ff18");
const { data, isLoading } = useContractRead(contract, "getAllOrders", [])
console.log(data,"idar hai")
console.log("here",data)
  const onSuccess = (e) => {
    // alert(e.data);
    // getaccess(e.data);
    // console.log("this is final", data[e.data])
    navigation.navigate("UserCropTrack",{product:data[e.data]})
    // e.data contains the QR code data
  };

  return (
    <SafeAreaView>
       <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.black, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" ,}}>Scan a QR code</Text>
      </View>
    <QRCodeScanner
    
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000',

  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default test