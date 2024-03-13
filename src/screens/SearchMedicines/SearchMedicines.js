
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, Keyboard, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
import ImagesPath from '../../assests/ImagesPath';

import CustomLoader from '../../component/CustomLoader';
import { Utils, colors, fonts } from '../../contants';
import ApiUrl from '../../Lib/ApiUrl';
import Helper from '../../Lib/Helper';
import styles from './styles';



const SearchMedicines = (props) => {
    const { navigation } = props;

    const [imgBaseUrl, setImgBaseUrl] = useState('');
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [medicineData, setMedicineData] = useState([]);
    const [searchMed, setSearchMed] = useState('');

    const [patient, setPatient] = useState({
        fullname: '',
        contactNum: '',
        email: '',
        gender: '',
        date: '',
        bloodGroup: '',
        pat_id: '',
        street: '',
        locality: '',
        state: '',
        city: '',
        pincode: ''
    })

    useEffect(() => {
        getMedicines('b');
        showLoader(true);
    }, [])

    const getMedicines = (text) => {
        let formdata = new FormData();
        

        // Helper.makeRequest({ url: `doctor/search-drugs?search=${text}`, data: formdata, method: "GET" }).then((data) => {
        //     hideLoader(false)
        //     console.log("Medicines", JSON.stringifydata);
        //     if (data) {
        //         //setImgBaseUrl(data.catUrl)
        //         // setScreenState({ ...screenState, imgBaseUrl: data.catUrl })
        //         // setGetAllCateList(data.data.category);
        //         setMedicineData(data?.allMedicine)
        //         console.log(data)

        //        // Helper.showToast(data.message)

        //     } else {
        //        // Helper.showToast(data.message)
        //         hideLoader(false)
        //     }
        //     // Helper.showToast(data.message)
        // }).catch(err => {
        //     console.log("----err::: ", err)
        //     // Helper.showToast(err.message)
        //     hideLoader(false)
        // })
        var myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IkFRaHNTdkdFaWx4QWRkMWpEcHo5dnc9PSIsInZhbHVlIjoiTWMzTHdNVXhqbUZGdXg3Mm0rdzBScFc0ckEwcG4yN0psTUJBWnpmWEtzM2xUV2FFczdRZ2hBa2MxR1N0SzFjUWp4UGFCV2FnZGM3SURwUityVExONXZxQVkyazY2d2twVStsUDc0UGxRM0p3T3I1V0VqUmFpV3RMMXNRNEFaeTkiLCJtYWMiOiJkMGVmZTRiNDE0N2JiOTg5MWQ2YzQxNzI0YzliNDQ2MGFlYzhjNTg1OTY5OWE1MDlmMWFkZjhjOGUxY2ZkZjAwIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImNFaFI1eW4xTFlFN29xWTdaMDd3MEE9PSIsInZhbHVlIjoiWS9Qc21kbm1iMVhVRXN4ZEd5NjYrL3pUTWhUenY5UVVBUkpUWkZ4NTdpNUhRUGpvMVBPNXgyanlLYW9NOHNWOEtPemQyellBVmQxc2UreUtWMWNIMCtyTUVuMG8rLzZiTGFZOVJEZmk0TThuNVNaRy9Ud0xpVzdudlVsZm9sUEsiLCJtYWMiOiIxOTM4ZTMwMjJjYTc3NzVmMzFkM2RlYjk3ZjliMWRkMWE4MDAzNjM3MmM1YzhkZDkzMGJiZmFjZTBlNGZkNjA0IiwidGFnIjoiIn0%3D");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};

fetch(`https://onehealthassist.com/search-drugs?search=${text}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    
    console.log("medjlh",result?.allMedicine)
setMedicineData(result?.allMedicine)
})
  .catch(error => console.log('error', error));
    }

    const arr = [
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        }
    ]
    const patientsListFun = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.appointmentReqCardViewCss}
                //onPress={() => { navigation.navigate('PatientDetails'); }}
                >
                <View style={{ flexDirection: 'row', marginVertical: Utils.ScreenWidth(3), alignItems:'center' }}>
                    <View style={styles.imgeViewCss}>
                        {/* <Image style={styles.imgCss} source={item.profile_image ? { uri: item.profile_image } : ImagesPath.home.manImg} /> */}
                        <Image style={styles.imgCss} source={ item?.nonproprietaryname === 'SYRUP' ? ImagesPath.home.bottle_icon : ImagesPath.home.capsule_icon} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: Utils.ScreenWidth(3) }}>
                        <Text style={styles.reqTitleCss}>{item?.producttypename} {item?.nonproprietaryname}</Text>
                        {/* <Text style={styles.dateTimeReqTextCss}>{moment(item.created_at).format('MMMM DD')}  -  {moment(item.created_at).format('hh:mm A')}</Text> */}
                        <Text style={styles.dateTimeReqTextCss}>{item?.proprietarynamesuffix}</Text>
                        <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate('MedicineDetails', {data : item})
                        }}
                        style={{marginVertical:Utils.ScreenHeight(1)}}>
                        <Text style={{
                             color: colors.black,
                            //  fontFamily: fonts.extraBold,
                             fontSize: Utils.ScreenWidth(3.4), // 14
                             textDecorationLine: 'underline'
                        }}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.primary}}/>
        <SafeAreaView style={styles.container}>
                <View style={{width: '100%', height: Utils.ScreenHeight(6), backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: colors.white, textAlign: 'center', fontSize: Utils.ScreenWidth(4.5), fontWeight: '600' }}>Search Medicines</Text>
                </View>
            <View
                style={{
                    marginVertical: Utils.ScreenHeight(1),
                    paddingHorizontal: Utils.ScreenWidth(3),
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <TextInput
                    // label={'phone'}
                    placeholder={'Search'}
                    onChangeText={text => {
                        setSearchMed(text)
                        getMedicines(text)

                    }}
                    value={searchMed}
                    placeholderTextColor={colors.inputColorP}
                    maxLength={20}
                    style={{
                        fontSize: 15,
                        borderRadius: 5,
                        backgroundColor: colors.white,
                        padding: Utils.ScreenHeight(0.5),
                        height:Utils.ScreenHeight(5),
                        // paddingHorizontal: moderateScale(30),
                        color: colors.black,
                        // backgroundColor:"red",
                        borderWidth: 1,
                        borderColor:colors.primary,
                        width: '100%',
                    }}
                />
            </View>
            <ScrollView>
                <FlatList
                    data={medicineData}

                    renderItem={({item}) =>{
                        
                        return(

                            <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.appointmentReqCardViewCss}
                            //onPress={() => { navigation.navigate('PatientDetails'); }}
                            >
                            <View style={{ flexDirection: 'row', marginVertical: Utils.ScreenWidth(3), alignItems:'center' }}>
                                <View style={styles.imgeViewCss}>
                                    {/* <Image style={styles.imgCss} source={item.profile_image ? { uri: item.profile_image } : ImagesPath.home.manImg} /> */}
                                    <Image style={styles.imgCss} source={ item?.nonproprietaryname === 'SYRUP' ? ImagesPath.home.bottle_icon : ImagesPath.home.capsule_icon} />
                                </View>
                                <View style={{ flex: 1, marginHorizontal: Utils.ScreenWidth(3) }}>
                                    <Text style={styles.reqTitleCss}>{item?.drug_name} {item?.nonproprietaryname}</Text>
                                    {/* <Text style={styles.dateTimeReqTextCss}>{moment(item.created_at).format('MMMM DD')}  -  {moment(item.created_at).format('hh:mm A')}</Text> */}
                                    <Text style={styles.dateTimeReqTextCss}>{item?.proprietarynamesuffix}</Text>
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate('MedicineDetails', {data : item})
                                    }}
                                    style={{marginVertical:Utils.ScreenHeight(1)}}>
                                    <Text style={{
                                        color: colors.black,
                                        fontFamily: fonts.extraBold,
                                        fontSize: Utils.ScreenWidth(3.4), // 14
                                        textDecorationLine: 'underline'
                                    }}>View Details</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        )
                         
                        
                    }}
                
                />
            </ScrollView>

        </SafeAreaView>
        </>
    );
}


export default SearchMedicines;