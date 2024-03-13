import { View, Text, StatusBar, Image, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Utils, colors } from '../../contants';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const DoctorAccessList = () => {
    const navigation = useNavigation();
    const[data,setdata] = useState([]);
    const[loader,setloader] = useState(true);
    const[isdata,setisdata] = useState(true);

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const fetchdata = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "uuid": "fcca0467-e8de-4194-9917-5581983ba895"
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://3715-2401-4900-57af-7d7f-ad01-4a89-1a18-af08.ngrok-free.app/api/show-data-to-patient/", requestOptions)
          .then(response => response.json())
          .then(result => {console.log('here',result?.data)
        setdata(result?.data)
        if(result?.data?.length === 0) setisdata(false)
        setloader(false)
        console.log("data is",data)
        })
          .catch(error => {console.log('error', error)
          setloader(false)
        });

    }
    useEffect(() => {
      // oid:"6504e0754312a4f26f9616fa"
      // console.log("from useff")
     fetchdata()
      
    }, [])


    const revoke = ()=>{

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "patient_uid": "fcca0467-e8de-4194-9917-5581983ba895",
  "doctor_uid": "995827ce-3f4d-4c62-89c8-ab3997902722"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
setloader(true)
fetch("https://3715-2401-4900-57af-7d7f-ad01-4a89-1a18-af08.ngrok-free.app//api/remove-access/", requestOptions)
  .then(response => {response.text()

})
  .then(result => {console.log(result)
fetchdata()

})
  .catch(error => {console.log('error', error)
fetchdata()
});

    }





    const latest = ({ item, index }) => {
      return (
        <View >
        <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.6), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <View style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.profile.doc_man} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:"400", color: colors.black, width:Utils.ScreenWidth(35)}}>Dr Kresha Mehta</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.2), fontWeight:"400", color: colors.green}}>Mukesh Ambani Hospital</Text>
                </View>

                {/* <View
                
                style={{flex:1, justifyContent:'center', marginLeft:Utils.ScreenWidth(10), borderWidth:1, marginRight:Utils.ScreenWidth(3),justifyContent:'center', alignItems:"center", borderRadius:10, }}>
                    <Text
                        
                    style={{fontWeight:600 ,
                    color:colors.red,
                    paddingVertical:Utils.ScreenHeight(0.7), paddingHorizontal:Utils.ScreenWidth(0.3) }}>Revoke</Text>

                </View> */}
                <TouchableOpacity
                onPress={()=>{
                    revoke()
                    
                }}  
                style={{borderWidth:1,borderRadius:10, marginLeft:Utils.ScreenWidth(12)}}>
                <Text
                        
                        style={{fontWeight:600 ,

                        color:colors.red,
                        paddingVertical:Utils.ScreenHeight(1), paddingHorizontal:Utils.ScreenWidth(2) }}>Revoke</Text>
    
                </TouchableOpacity>
                </View>
               
                
          </View>
          </View>
         
          </View>

          
      )
  }
    
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         {loader ? (
            <View style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Please wait...</Text>
            </View>
          ) : (
            <View>
                <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Your Documents accessed</Text>
      </View>
         
   

        
                    <FlatList renderItem={latest} data={data}/>
           


    {!isdata&& 
    <Text style={{textAlign:"center", fontSize:18}}>
        NO Access Records Found!
    </Text>

    }
          

                    </View> )}
    </SafeAreaView>
  )
}



export default DoctorAccessList