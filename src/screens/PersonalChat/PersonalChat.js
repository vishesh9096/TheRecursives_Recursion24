import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import VideoPlayer from 'react-native-video-player'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'

const PersonalChat = () => {

    const[isidlle,setisidle]= useState(true);

    const[falg,setflag] = useState(false)
    const[img,setimg] = useState(true)
    const[temp,settemp] = useState(false)

    let intervalId
    const webhook = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://3715-2401-4900-57af-7d7f-ad01-4a89-1a18-af08.ngrok-free.app/api/get-video/", requestOptions)
            .then(response => response.json())
            .then(result =>{ console.log(result)
                clearInterval()
                if(result.success) {
                setvideo(result?.image_url)
                setflag(!falg)
                setimg(true)
                clearInterval(intervalId);
                setinput("")
                setloading(false)
                

                
                
                }
            
            })
            .catch(error =>{ console.log('error', error)
            setloading(false)
          });

            settemp(!temp)
    }
    const[input,setinput]= useState("");
    const[loading,setloading] = useState(false);
    const postdata = () =>{
var formdata = new FormData();
setloading(true)
        formdata.append("user_input", input);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://3715-2401-4900-57af-7d7f-ad01-4a89-1a18-af08.ngrok-free.app/api/talk/", requestOptions)
        .then(response => response.json())
        .then(result =>{ console.log(result)
            intervalId = setInterval(webhook, 1000);
        
        
        })
        .catch(error => console.log('error', error));
    }


    
   
    const defvid = "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C115824946733280366651/tlk_QSlClpT-bYomfF-4a0bhA/1708231971098.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1708318377&Signature=4w0FQ1dCxBJWGRb%2FRvo1lQvSMjQ%3D"
    const[video,setvideo] = useState(defvid)
    const[idlevideo,setidlevideo]  = useState("https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C112472330739199774156/tlk_kTZjytdRcyKtMeS30KZCk/1705703432702.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1705789839&Signature=mG9FL2iq6d6mHhknET5ZOgshkgY%3D&X-Amzn-Trace-Id=Root%3D1-65aaf80f-591e7dce2caddd311f9ce982%3BParent%3D770a91fb92182fad%3BSampled%3D1%3BLineage%3D6b931dd4%3A0")
  return (
    <ScrollView>

      <VideoPlayer
      thumbnail={{uri:"https://imgtr.ee/images/2024/02/18/b69ec4801befb319ad9c8d9607849ca9.png"}}
      onLoad={()=>{
        setTimeout(() => {
          
          setimg(false)
        }, 1000);


      }}
         video={{uri:video}}
         autoplay
         loop
         showDuration={false}
         useNativeDriver={true}
         controls = {false}

         hideControlsOnStart
         onEnd ={()=>{
           if(falg)
           {
             setflag(false)
             setvideo(defvid);
             setimg(true)
             
           }

         }}
         style={{height:Utils.ScreenHeight(46), }}
         seekBar={null}

       />
       {
        img&&
        <Image 
        style={{height:Utils.ScreenHeight(46),

          width:"100%", position:'absolute', }}
        source={{uri:'https://imgtr.ee/images/2024/02/18/b69ec4801befb319ad9c8d9607849ca9.png'}}/>

} 
        {/* {falg ?
          idle video
          <VideoPlayer
          video={{uri:idlevideo}}
          autoplay
          loop

          showDuration={false}
          useNativeDriver={true}
          controls = {false}
          onEnd ={()=>{console.log("flag ended false")}}
          hideControlsOnStart
          
          style={{height:Utils.ScreenHeight(46), }}
          seekBar={null}

        />

          } */}

          {
            loading ?
            <View style={{marginTop:Utils.ScreenHeight(10)}}>
            <ActivityIndicator size="large" color={colors.primary} />
            </View> :
            <View>

            <View style={{
                      marginTop: Utils.ScreenHeight(2),
                      borderRadius: 8
  
  , flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                  }}>
                      
                  <TextInput
                      value={input}
                      onChangeText={(text) => setinput(text)}
                      style={{ height: Utils.ScreenHeight(8),
                          
                          borderWidth:1,
                          borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(2), width: Utils.ScreenWidth(75), borderRadius: 5 }}
                      placeholderTextColor={'grey'} placeholder="Enter Prompt" />
                      <TouchableOpacity
                      onPress={()=>{postdata()}}
                      
                      style={{ paddingHorizontal: 10 , backgroundColor:colors.primary, borderRadius:12}}>
                          <Text style={{color:colors.white, fontSize:20, 
                              fontWeight:400,
                              paddingHorizontal:Utils.ScreenWidth(3), paddingVertical:Utils.ScreenHeight(1.5), }}>Send</Text>
                      </TouchableOpacity>
  
                  </View>
            <View style={{marginBottom:Utils.ScreenHeight(30)
          
          }}></View>
            </View>



          }

        



    </ScrollView>
  )
}

export default PersonalChat