import { View, Text, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Utils, colors } from '../../contants'
import { ScrollView } from 'react-native-gesture-handler'
import { useContract, useContractWrite } from "@thirdweb-dev/react-native";
import ImagesPath from '../../assests/ImagesPath'
import CustomLoader from '../../component/CustomLoader'
const LawyerDetails = ({route}) => {
  const product = route.params.product
    const navigation = useNavigation()

    const { contract } = useContract("0xbef3d2900324345D698d2eA583e952Ccb9E2ff18");
  const { mutateAsync: approveOrderAsTrader, isLoading } = useContractWrite(contract, "approveOrderAsTrader")

const[loaderVisible, setloaderVisible] = useState(false)
const[flag, setflag] = useState(false)
const sendinvoice= ()=>{
  var formdata = new FormData();
formdata.append("phoneNumber", "9644679096");
formdata.append("uri", "https://daff-103-116-169-162.ngrok-free.app/static/prescription/invoice_16_6909821.pdf");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://swift-pigs-raise.loca.lt/upload/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
  const call = async () => {
    setloaderVisible(true)
    try {
      const data = await approveOrderAsTrader({ args: [product.index+1] });
      console.info("contract call successs", data);
      setloaderVisible(false)
      setflag(true)
      alert("Transaction Completed Your order will be delivered soon")
      sendinvoice()
    } catch (err) {
      setloaderVisible(false)
      console.error("contract call failure", err);
    }
  }
  console.log("hereee ",product.item[8])
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
         <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Order Details</Text>
                </View>
                <ScrollView style={{backgroundColor:colors.white,
                    height:Utils.ScreenHeight(100),
                    marginHorizontal:Utils.ScreenWidth(6)}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/10367/10367619.png"}} style={{
                                borderRadius:30,
                            height:Utils.ScreenHeight(7),width:Utils.ScreenHeight(7)}}/>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2)}}>{product.item[0]}</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11}}></Text>
                    </View>
                    <View style={{flex:1,alignSelf:"center", marginLeft:Utils.ScreenHeight(4)}}>
                    {/* <Text style={{fontWeight:300, color:colors.grey, fontSize:12}}>Reviews</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
               
                  
                    </View> */}
                    </View>
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>

                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2.3)}}>Location</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, fontSize:Utils.ScreenHeight(1.7)}}>{product.item[1]}</Text>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(25)}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2.3)}}>Price</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11,fontSize:Utils.ScreenHeight(1.7)}}>₹{product.item[6]} </Text>

                    </View>
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>
                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2.3)}}>Quantity</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5),fontSize:Utils.ScreenHeight(1.7)}}>{product.item[5]} tons</Text>
                    </View>
                   
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>
                    {/* <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Fees</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5)}}>Rs 2000 for Consultancy  </Text>
                    </View>
                   
                    </View> */}
                    {/* <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View> */}
                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <TouchableOpacity 
                    onPress={()=>{navigation.navigate("PatientRecords")}}
                    style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2.3)}}>Yeild Quality</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5),fontSize:Utils.ScreenHeight(1.7)}}>{product.item[4]} Grade</Text>
                    </TouchableOpacity>
                   
                    </View>
               {
                flag ?
                    <View style={{marginTop:Utils.ScreenHeight(8), flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{call()}}
                        style={{
                            justifyContent:"center",
                            height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.white, borderRadius:12, borderWidth:1, borderColor:colors.primary}}>
                                <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(2.5), color:colors.primary, fontWeight:500}}>Order Confirmed</Text>
                        </TouchableOpacity>

                    </View>:

<View style={{marginTop:Utils.ScreenHeight(8), flex:1, justifyContent:"center", alignItems:"center"}}>
<TouchableOpacity 
onPress={()=>{call()}}
style={{
    justifyContent:"center",
    height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
        <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(2.5), color:colors.white, fontWeight:500}}>Confirm Order</Text>
</TouchableOpacity>

</View>



                        }
                  

                        


                </ScrollView>
                <CustomLoader loaderVisible={loaderVisible} />

    </SafeAreaView>
  )
}

export default LawyerDetails