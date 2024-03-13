import { View, Text, SafeAreaView,TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import CustomLoader from '../../component/CustomLoader'
const Xray = () => {

   

    const[modalvisible,setmodalvisible] = useState(false)
    const[loaderVisible,setloaderVisible] = useState(false)
    const[imagee,setimage] = useState()
    const[refse,setrefse] = useState(false)
    const[isimage,setisimage] = useState(false)
    const[analysis,setanalysis] = useState("")


    const postdata=(upload)=>{


var formdata = new FormData();

formdata.append('image', {
    'uri': upload.uri,
    'type': upload.type,
    'name': Date.now() + upload.name,
});


var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://e334-103-116-169-162.ngrok-free.app/disease-prediction", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
setanalysis(result?.disease_prediction)
})
  .catch(error => console.log('error', error));

  setloaderVisible(false)


    }


    const opengallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            // multiple: true
        }).then(image => {
            setmodalvisible(false);
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };
            setimage(upload);
            setrefse(!refse);
            setisimage(true)
            console.log('-----------Gellery::: ', upload);
            setloaderVisible(true)
            postdata(upload)
        });
        setloaderVisible(false)
    }

   
    const navigation = useNavigation()

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
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.takeViewCss}
                            onPress={() => { setmodalvisible(false) }}>
                            <Text style={styles.lebletextCss}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { opengallery() }}
                            style={[styles.takeViewCss, { borderBottomWidth: 0, }]}>
                            <Text style={styles.lebletextCss}>Choose from Library</Text>
                        </TouchableOpacity>
                    </View>
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
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
        <View style={{backgroundColor:colors.white, height:Utils.ScreenHeight(100)}}>
           <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Plant Disease Detection</Text>
      </View>


      <TouchableOpacity 
        onPress={()=>{setmodalvisible(true)}}
        style={{
            justifyContent:"center",
            width:Utils.ScreenWidth(90),alignSelf:"center", borderWidth:1,borderColor:colors.grey, height:Utils.ScreenHeight(16), marginTop:Utils.ScreenHeight(3), borderColor:colors.primary, borderRadius:16, borderStyle:"dashed"}}>
                <Image source={ImagesPath.onafterprint.upload}
                style={{resizeMode:"contain", height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(10), tintColor:colors.primary, alignSelf:"center"}}
                />
                <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(2), color:colors.primary, textAlign:"center"}}>Upload a picture of the affected area</Text>
        </TouchableOpacity>

        {isimage &&<>
                            <Image style={styles.cameraIconViewCss} source={{ uri: imagee.uri }} />
                            
                           
                     
        <View style={{marginTop:Utils.ScreenHeight(2), marginHorizontal:Utils.ScreenWidth(5)}}>
        <Text
        style={{fontSize:30, fontWeight:600,textAlign:'center', color:analysis ==="Please consult a doctor it may be a fracture"? colors.red:colors.green }}
        >Analysis:</Text>
        <Text style={{fontSize:20, fontWeight:400, marginTop:Utils.ScreenHeight(2) }}>Your Crop Might be affected with :</Text>
        <Text
        style={{fontSize:20, fontWeight:600,marginTop:Utils.ScreenHeight(1) }}
        > {analysis}</Text>
        </View>
        </>

}
        
    {uploadmodal()}
    </View>
    <CustomLoader loaderVisible={loaderVisible} />
    </SafeAreaView>
  )
}



export default Xray