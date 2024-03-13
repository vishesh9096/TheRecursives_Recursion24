// import { View, Text, TouchableOpacity, Image, SafeAreaView, Animated } from 'react-native'
// import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'

// const OrderTracking = () => {
//     const navigation = useNavigation()
//   return (
//     <SafeAreaView style={{backgroundColor:colors.white}}>
//     <View style={{backgroundColor:colors.white, height:Utils.ScreenHeight(100)}}>
//        <View style={{
//     flexDirection: "row",
//     marginBottom: Utils.ScreenHeight(3),
//     marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
//   }}>
//     <TouchableOpacity
//       onPress={() => { navigation.goBack() }}>
//       <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
//     </TouchableOpacity>
//     <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Track Your Order</Text>
//   </View>

//   </View>

//   </SafeAreaView>
//   )
// }

// export default OrderTracking

import { View, Text, TouchableOpacity, Animated, SafeAreaView,Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
const OrderTracking = ({route}) => {
    const [selectedStep, setSelectedStep] = useState(0);
const navigation = useNavigation()


const product = route.params.product
console.log("idar ",  route.params.product)



useEffect(() => {

    console.log("usedff called",route.params.product.status)
    if(product.status?.includes("created")) setSelectedStep(1)
    if(product.status?.includes("accepted")) setSelectedStep(2)
    if(product.status.includes("dispatched")) setSelectedStep(3)
    else setSelectedStep(4)
}, [product])



    useEffect(() => {

       
        if (selectedStep == 1) {
            start1();
            
        }
        if (selectedStep == 2) {
            start2();
        }
        if (selectedStep == 3) {
            start3();

        }
        if (selectedStep == 0) {
            setSelectedStep(selectedStep + 1);
        } else {
            setTimeout(() => {
                setSelectedStep(selectedStep + 1);
            }, 3000);
        }
    }, [])
    


    const progress1 = useRef(new Animated.Value(0)).current;
    const progress2 = useRef(new Animated.Value(0)).current;
    const progress3 = useRef(new Animated.Value(0)).current;
    const start1 = () => {
        Animated.timing(progress1, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    const start2 = () => {
        Animated.timing(progress2, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    const start3 = () => {
        Animated.timing(progress3, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
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
        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Track Your Order</Text>
      </View>

      <View style={{flexDirection:"row", justifyContent:"center"}}> 
        <View style={{}}>
            <View style={{
                
                width: '50%', alignItems: 'center', paddingVertical: 50 }}>
        
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: selectedStep > 0 ? colors.primary : '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>


                    <Text style={{ color: '#fff' }}>1</Text>
                </View>
                <View
                    style={{
                        width: 6,
                        height: 100,
                        backgroundColor: '#f2f2f2',
                    }}></View>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        
                        backgroundColor: selectedStep > 1 ? colors.primary : '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: '#fff' }}>2</Text>
                </View>
                <View
                    style={{
                        width: 6,
                        height: 100,
                        backgroundColor: '#f2f2f2',
                    }}></View>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: selectedStep > 2 ? colors.primary : '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: '#fff' }}>3</Text>
                </View>
                <View
                    style={{
                        width: 6,
                        height: 100,
                        backgroundColor: '#f2f2f2',
                    }}></View>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: selectedStep > 3 ? colors.primary : '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: '#fff' }}>4</Text>
                </View>
            </View>
            <View
                style={{
                    
                    width: '50%',
                    alignItems: 'center',
                    
                    paddingVertical: 50,
                    position: 'absolute',
                    top: 0,
                }}>
                <Animated.View
                    style={{
                        width: 6,
                        height: progress1,
                        marginTop: 30,
                        backgroundColor: colors.primary,
                    }}></Animated.View>

                <Animated.View
                    style={{
                        width: 6,
                        height: progress2,
                        marginTop: 30,
                        backgroundColor: colors.primary,
                    }}></Animated.View>
                <Animated.View
                    style={{
                        width: 6,
                        height: progress3,
                        marginTop: 30,
                        backgroundColor: colors.primary,
                    }}></Animated.View>
            </View>
        </View>
        <View>
        <View style={{marginTop:Utils.ScreenHeight(6), marginLeft:Utils.ScreenWidth(5)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.black}}>Order Created</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.7) , fontWeight:300,color:colors.grey }}>12 Feb 2024</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.5) , fontWeight:300,color:colors.primary }}>View Details</Text>
        </View>
        <View style={{marginTop:Utils.ScreenHeight(9), marginLeft:Utils.ScreenWidth(5)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.black}}>Order Accepted</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.7) , fontWeight:300,color:colors.grey }}>13 Feb 2024</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.5) , fontWeight:300,color:colors.primary }}>View Details</Text>
        </View>
        <View style={{marginTop:Utils.ScreenHeight(9), marginLeft:Utils.ScreenWidth(5)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.black}}>Order Dispatched</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.7) , fontWeight:300,color:colors.grey }}>12 Feb 2024</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.5) , fontWeight:300,color:colors.primary }}>View Details</Text>
        </View>
        <View style={{marginTop:Utils.ScreenHeight(9), marginLeft:Utils.ScreenWidth(5)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.black}}>Delivered</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.7) , fontWeight:300,color:colors.grey }}>12 Feb 2024</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.5) , fontWeight:300,color:colors.primary }}>View Details</Text>
        </View>


        </View>

        
        </View>
        {/* {
            selectedStep === 2 ?
            <TouchableOpacity
                style={{
                    
                    marginTop: 100,
                    height: 50,
                    width: 200,
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                }}
                onPress={() => {
                    if (selectedStep == 1) {
                        start1();
                    }
                    if (selectedStep == 2) {
                        start2();
                    }
                    if (selectedStep == 3) {
                        start3();
                    }
                    if (selectedStep == 0) {
                        setSelectedStep(selectedStep + 1);
                    } else {
                        setTimeout(() => {
                            setSelectedStep(selectedStep + 1);
                        }, 3000);
                    }
                }}>
                <Text style={{color:colors.white, fontWeight:700}}>Next Step</Text>
            </TouchableOpacity>:<>

} */}
                    </View>
                  
                    </SafeAreaView>
    );
};
export default OrderTracking;