import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import moment from 'moment'
import styles from './styles'
import TextInputCom from '../../component/InputTextView/TextInputCom'
import { ConnectWallet, darkTheme, useContract, useContractWrite } from "@thirdweb-dev/react-native";
import CustomLoader from '../../component/CustomLoader'
import { useNavigation } from '@react-navigation/native'

const AgriHome = () => {


    const { contract } = useContract("0xbef3d2900324345D698d2eA583e952Ccb9E2ff18");
    const { mutateAsync: createOrder, isLoading } = useContractWrite(contract, "createOrder")
  
    const call = async () => {
        setloaderVisible(true)
        console.log(data[selindex]," final")
        const productName = `${data[selindex].product_name}`;
        const quantity = `${data[selindex].quantity}`;
      try {

        const data = await createOrder({ args: [productName, "Nashik", "NA","12-02-2024", "A", quantity, price].map(String)  });
        console.info("contract call successs", data);
        setloaderVisible(false)
        alert("Smart Contract Deployed")
      } catch (err) {
        console.error("contract call failure", err);
        setloaderVisible(false)
      }
    }

    const[data,setdata] = useState([])
    const[modalvisible,setmodalvisible] = useState(false)
    const[loaderVisible,setloaderVisible] = useState(false)
    const[selindex,setselindex] = useState(0)
    const[price,setprice] = useState(0)
    const[name,setname] = useState("")
    const getdata = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://daff-103-116-169-162.ngrok-free.app/api/get-order/", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result)
            setdata(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const uploadmodal = () => {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalvisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setmodalvisible(false);
                }}>
                <View style={styles.modalMainViewCss}>
                    <View style={styles.modalCardViewCss}>
                        <View style={{marginTop:Utils.ScreenHeight(3)}}>
                        <Text style={{fontWeight:600,fontSize:20, marginLeft:Utils.ScreenWidth(30), marginBottom:Utils.ScreenHeight(1)}}>Product: {data[selindex]?.product_name}</Text>
                        <TextInputCom
                            value={price}
                            keyboardType="phone-pad"
                            placeholder={'Enter Price (in Rs)'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setprice(text)}
                        />
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.closeButtonCss,{ backgroundColor:colors.primary}]}
                        onPress={() => { call()
                        
                        setmodalvisible(false)
                        }}>
                        <Text style={[styles.lebletextCss, { color: colors.white ,}]}>Create Smart Contract</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.closeButtonCss}
                        onPress={() => { setmodalvisible(false); }}>
                        <Text style={[styles.lebletextCss, { color: colors.white }]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    const docs = ({ item, index }) => {
        if(item.prize===null){

         console.log(moment(item.updated_at).format('DD MMM, y'))
        return (
        <TouchableOpacity 
          onPress={()=>{
            setselindex(index)
            setmodalvisible(true)
          }}
          style={{flexDirection:"row", 
        justifyContent:"flex-start",marginTop:Utils.ScreenHeight(1),
        alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(12)}}>
          <View style={{width:"20%", marginLeft:Utils.ScreenWidth(3)}}>
          <Image source={ImagesPath.LegalBridge.document} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
          </View>
            <View style={{width:"50%"}}>
            <Text style={{fontWeight:600,fontSize:15}}>{item.product_name}</Text>

            <Text style={{fontWeight:400, color:colors.grey, fontSize:12, marginTop:Utils.ScreenHeight(1)}}>{moment(item.updated_at).format('DD MMM, y')}</Text>
            </View>
            
            <TouchableOpacity 
            onPress={()=>{Clipboard.setString(base+item?.hash_value)}}
            style={{backgroundColor:colors.secondary, borderRadius:12}}>
              <Text 

              style={{paddingVertical:Utils.ScreenHeight(0.8),
                fontWeight:600, color:colors.primary}}>Finalise Price</Text>
            </TouchableOpacity>
        </TouchableOpacity>
            



        )
              }
        
    }

    useEffect(() => {
     getdata()
    }, [])
    const navigation = useNavigation()
    
  return (
    <SafeAreaView>
        <View style={{marginHorizontal:Utils.ScreenWidth(5), height:Utils.ScreenHeight(90)}}>
        <ConnectWallet theme={darkTheme}  />
        <View style={{marginTop:Utils.ScreenHeight(5)}}>

      <FlatList
      data={data}
      renderItem={docs}
      />

      </View>
      </View>
      <View style={{position:"absolute", bottom:Utils.ScreenHeight(4), right:Utils.ScreenWidth(5)}}>
        <Text onPress={()=>{

navigation.reset({
    index: 0,
    routes: [
        { name: 'Splash' },
    ],
})


        }}>Logout</Text>
      </View>
      {uploadmodal()}
      <CustomLoader loaderVisible={loaderVisible} />
    </SafeAreaView>
  )
}

export default AgriHome