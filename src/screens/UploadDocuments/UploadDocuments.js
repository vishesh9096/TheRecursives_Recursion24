import { View, Text, Image, TouchableOpacity, ActivityIndicator, Clipboard, Linking, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./styles";
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import Uploadtoipfs from '../Uploadtoipfs/Uploadtoipfs';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import WebView from 'react-native-webview';
import TextInputCom from '../../component/InputTextView/TextInputCom';
import { AppButton } from '../../component';

const UploadDocuments = () => {

    const[Quantity,setQuantity] = useState(0)
    const navigation = useNavigation();
    const fetchdata =()=>{
        setloader(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODk5NDUzLCJpYXQiOjE2OTYwODUwNTMsImp0aSI6IjNlNzQ0YWU2NDRjZTQ0Mjk5Y2JjMjVlMTgyYzliZjgxIiwidXNlcl9pZCI6MTV9.kUP5DalWACAS7pRalO2fMmnbNMRWaKi73oLmooOeU1c");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://daff-103-116-169-162.ngrok-free.app/api/get-order/", requestOptions)
          .then(response => response.json())
          .then(result =>{ console.log(result.data,"result")
            setdata(result?.data)
            setloader(false)
        })
          .catch(error =>{ console.log('error', error)








          








          setloader(false)
          settemp(!temp)
        });
    }
    useEffect(() => {
      fetchdata()
    }, [temp])

    useEffect(() => {
      console.log("data from useEffect")
    }, [data])

    const docs = ({ item }) => {
        const base = "https://ipfs.io/ipfs/"
        console.log(base+item.hash_value)
         console.log(moment(item.updated_at).format('DD MMM, y'))
        return (
        <TouchableOpacity 
          onPress={()=>{setweburi(base+item.hash_value);
            setvisible(true)
          }}
          style={{flexDirection:"row", 
        justifyContent:"flex-start",marginTop:Utils.ScreenHeight(1),
        alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
          <View style={{width:"20%", marginLeft:Utils.ScreenWidth(3)}}>
          <Image source={ImagesPath.LegalBridge.document} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
          </View>
            <View style={{width:"50%"}}>
            <Text style={{fontWeight:600,fontSize:15}}>{item.product_name}</Text>
            <Text style={{fontWeight:400, color:colors.grey, fontSize:12}}>{moment(item.updated_at).format('DD MMM, y')}</Text>
            </View>
            
            <TouchableOpacity 
            onPress={()=>{Clipboard.setString(base+item?.hash_value)}}
            style={{backgroundColor:colors.secondary, borderRadius:12}}>
              <Text 
              onPress={()=>{navigation.navigate("OrderTracking",{product:item})}}
              style={{paddingVertical:Utils.ScreenHeight(0.8),
                fontWeight:600, color:colors.primary}}>Check Status</Text>
            </TouchableOpacity>
        </TouchableOpacity>
            


        )
    }






    const postdata = ()=>{

      setloader(true)
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "product_name": name,
  "quantity": Quantity
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://daff-103-116-169-162.ngrok-free.app/api/create-order/", requestOptions)
  .then(response => response.json())
  .then(result =>{ console.log(result)
  settemp(!temp)
  })
  .catch(error => console.log('error', error));

  setloader(false)
    }
    
    
    
    const [doc,setdoc] = useState(false)
    const [temp,settemp] = useState(false)
    const [loader,setloader] = useState(false)
    const [data,setdata] = useState([]) 

    const [uploadedCID, setUploadedCID] = useState(null);
  const[name,setname ] = useState("")
  const[visible,setvisible ] = useState(false);
  const[weburi,setweburi] = useState("")
  

  return (
    <>
     {loader ? (
            <View style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text>Please wait </Text>
            </View>
          ) : (
    <View style={{paddingHorizontal:Utils.ScreenWidth(4), flex:1,backgroundColor:colors.white}}>
       
       <TouchableOpacity 
        onPress={()=>{setvisible(true)}}
        style={{
            justifyContent:"center",
            width:Utils.ScreenWidth(90),alignSelf:"center", borderWidth:1,borderColor:colors.grey, height:Utils.ScreenHeight(16), marginTop:Utils.ScreenHeight(3), borderColor:colors.primary, borderRadius:16, borderStyle:"dashed"}}>
                <Image source={ImagesPath.onafterprint.upload}
                style={{resizeMode:"contain", height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(10), tintColor:colors.primary, alignSelf:"center"}}
                />
                <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(2), color:colors.primary, textAlign:"center"}}>Create A New Order</Text>
        </TouchableOpacity>
      <Text style={styles.heading}>Recently Created</Text>
      <View>
        <View>
            <FlatList
            data={data}
            renderItem={docs}
            />


            <TouchableOpacity 

           
          style={{flexDirection:"row", 
        justifyContent:"flex-start",marginTop:Utils.ScreenHeight(1),
        alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
          <View style={{width:"20%", marginLeft:Utils.ScreenWidth(3)}}>
          <Image source={ImagesPath.LegalBridge.document} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
          </View>
            <View style={{width:"50%"}}>
            <Text style={{fontWeight:600,fontSize:15}}>Name</Text>
            <Text style={{fontWeight:400, color:colors.grey, fontSize:12}}>12 May 2023</Text>
            </View>
            
            <TouchableOpacity 

            style={{backgroundColor:colors.secondary, borderRadius:12}}>
              <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                fontWeight:600,
                paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>`Delivered`</Text>
            </TouchableOpacity>
        </TouchableOpacity>
            

        
            
        </View>
      </View>
      <Modal


        visible={visible}
        presentationStyle={'pageSheet'}
        // animationType={'slide'}
        onRequestClose={() => setvisible(false)}>
             <View style={{marginHorizontal:Utils.ScreenWidth(2), marginTop:Utils.ScreenHeight(2)}}>
     <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
      }}>
        <TouchableOpacity
          onPress={() => { setvisible(false) }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Create a order</Text>
      </View>


                 <View >
                    <TextInputCom
                        value={name}
                        keyboardType="default"
                        placeholder={'Enter Crop Name'}
                        returnKeyType="next"
                        maxLength={50}
                      //  getFocus={() => input_last.current.focus()}

                        //onChangeText={(text) => { setFirstName(text) }}
                        onChangeText={text => setname(text)}
                    />
                </View>

                <View >
                    <TextInputCom
                        value={Quantity}
                        keyboardType="phone-pad"
                        placeholder={'Enter Quantity (in tons)'}
                        returnKeyType="next"
                        maxLength={50}
                      //  getFocus={() => input_last.current.focus()}

                        //onChangeText={(text) => { setFirstName(text) }}
                        onChangeText={text => setQuantity(text)}
                    />
                </View>










<View>
      <AppButton
                    title={'Create Order'}
                    buttonWidth={Utils.ScreenWidth(90)}
                    onPress={() => {
                      setvisible(false)
                      postdata()}} // getUpdateDocQualification()
                />
</View>                

</View>
        
    </Modal>
    </View>
          )}
    </>
  )
}

export default UploadDocuments