import { View, Text, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import CustomLoader from '../../component/CustomLoader'
import TextInputCom from '../../component/InputTextView/TextInputCom'
import { AppButton } from '../../component'
const Skin = () => {
    const [modalvisible, setmodalvisible] = useState(false)
    const [loaderVisible, setloaderVisible] = useState(false)
    const [imagee, setimage] = useState()
    const [refse, setrefse] = useState(false)
    const [isimage, setisimage] = useState(false)
    const [analysis, setanalysis] = useState("")


    const [cropname, setcropname] = useState("")
    const [nitrogen, setnitrogen] = useState(0)
    const [phosporous, setphosporous] = useState(0)
    const [potassium, setpotassium] = useState(0)
    const [ph, setph] = useState(0)
    const [rainfall, setrainfall] = useState(0)

    const[ans,setans] = useState("")
    const[ans2,setans2] = useState("")


    const postdata = (upload) => {


        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "nitrogen": nitrogen,
    "phosphorous": phosporous,
    "pottasium": potassium,
    "ph": ph,
    "rainfall": rainfall,
    "city": "mumbai",
    "fertilizer_nitrogen": nitrogen,
    "fertilizer_phosphorous": phosporous,
    "fertilizer_potassium": potassium
});

// var raw = JSON.stringify({
//     "nitrogen": 100,
//     "phosphorous": 50,
//     "pottasium": 75,
//     "ph": 6.5,
//     "rainfall": 800,
//     "city": "mumbai",
//     "fertilizer_nitrogen": 50,
//     "fertilizer_phosphorous": 25,
//     "fertilizer_potassium": 30
//   });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://e334-103-116-169-162.ngrok-free.app/recommendation", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)


    setans(result.crop_prediction)
    setans2(result.fertilizer_recommendation)
    setmodalvisible(true)
})
  .catch(error => console.log('error', error));

        setloaderVisible(false)


    }

    const opencamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            //console.log("image", image.mime)
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };


            setrefse(!refse);
            console.log('-----------Camera: ', upload);

            setmodalvisible(false);
            postdata(upload)
        });
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
>
                            <Text style={styles.lebletextCss}>Crop Recommended : {ans}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setmodalvisible(false);
                            navigation.navigate("Fertilizers",{data:ans2})}}
                            activeOpacity={0.7}

                            style={[styles.takeViewCss, { borderBottomWidth: 0, }]}>
                            <Text style={styles.lebletextCss}>Fertilizer Recommendation</Text>
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
        <SafeAreaView style={{ backgroundColor: colors.white }}>
            <View style={{ backgroundColor: colors.white, height: Utils.ScreenHeight(100) }}>
                <View style={{
                    flexDirection: "row",
                    marginBottom: Utils.ScreenHeight(3),
                    marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
                }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Crop Recommendation System</Text>
                </View>

                <ScrollView style={{ marginHorizontal: Utils.ScreenWidth(2), marginTop: Utils.ScreenHeight(2) }}>
                  


                   

                    <View >
                        <TextInputCom
                            value={nitrogen}
                            keyboardType="phone-pad"
                            placeholder={'Enter Nitrogen Content'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setnitrogen(text)}
                        />
                    </View>

                    <View >
                        <TextInputCom
                            value={phosporous}
                            keyboardType="phone-pad"
                            placeholder={'Enter Phosporous Content'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setphosporous(text)}
                        />
                    </View>
                    <View >
                        <TextInputCom
                            value={potassium}
                            keyboardType="phone-pad"
                            placeholder={'Enter Potassium Content'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setpotassium(text)}
                        />
                    </View>
                    <View >
                        <TextInputCom
                            value={ph}
                            keyboardType="phone-pad"
                            placeholder={'Enter Ph level'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setph(text)}
                        />
                    </View>
                    <View >
                        <TextInputCom
                            value={rainfall}
                            keyboardType="phone-pad"
                            placeholder={'Enter Rainfall (in mm)'}
                            returnKeyType="next"
                            maxLength={50}
                            //  getFocus={() => input_last.current.focus()}

                            //onChangeText={(text) => { setFirstName(text) }}
                            onChangeText={text => setrainfall(text)}
                        />
                    </View>
                   








                    <View style={{marginTop:Utils.ScreenHeight(3)}}>
                        <AppButton
                            title={'Get Recommendations'}
                            buttonWidth={Utils.ScreenWidth(90)}
                            onPress={() => {

                                postdata()
                            }} // getUpdateDocQualification()
                        />
                    </View>

                </ScrollView>





                   



                   


                

                {uploadmodal()}
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
    )
}





export default Skin