import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ImagesPath from '../../assests/ImagesPath';
import { Utils } from '../../contants';


const Pharmacy1 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View>
         <Image source={ImagesPath.LegalBridge.medimg1} style={{height:Utils.ScreenHeight(35),width:Utils.ScreenWidth(100), resizeMode:"contain"}}/>
        </View>

        <View style={{marginHorizontal:Utils.ScreenWidth(5), flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View>
            <Text style={{color:'black', fontWeight:"600" , marginRight:'auto',fontSize:20}}>
           
           Shop by Category 
            </Text>
            </View>
            <TouchableOpacity>
            <Text style={{color:'grey'}}>
                View All
            </Text>
            </TouchableOpacity>
                
        </View>

    <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>
            <View style={{borderRadius:40}}>
        <Image source={ImagesPath.LegalBridge.babu} style={{height:Utils.ScreenHeight(15),width:Utils.ScreenWidth(30), resizeMode:"contain"}}/>
        </View>
        <View>
        <Image source={ImagesPath.LegalBridge.bodybuilder} style={{height:Utils.ScreenHeight(15),width:Utils.ScreenWidth(30), resizeMode:"contain"}}/> 
        </View>
        <View>
        <Image source={ImagesPath.LegalBridge.fam} style={{height:Utils.ScreenHeight(15),width:Utils.ScreenWidth(30), resizeMode:"contain"}}/>
        </View>
    </View>

    <TouchableOpacity>
         <Image source={ImagesPath.LegalBridge.order} style={{height:Utils.ScreenHeight(25),width:Utils.ScreenWidth(100), resizeMode:"contain"}}/>
        </TouchableOpacity>


        <View style={{marginHorizontal:Utils.ScreenWidth(5), flexDirection:"row", justifyContent:"space-between", alignItems:"center",height:Utils.ScreenHeight(10)}}>
            <View>
            <Text style={{color:'black', fontWeight:"600" , marginRight:'auto',fontSize:20}}>
           
           Shop by Category 
            </Text>
            </View>
            <TouchableOpacity>
            <Text style={{color:'grey'}}>
                View All
            </Text>
            </TouchableOpacity>
                
        </View>
        <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>
            <View style={{borderRadius:40}}>
        <Image source={ImagesPath.LegalBridge.foot} style={{height:Utils.ScreenHeight(15),width:Utils.ScreenWidth(45), resizeMode:"contain"}}/>
        </View>
        <View>
        <Image source={ImagesPath.LegalBridge.foot2} style={{height:Utils.ScreenHeight(15),width:Utils.ScreenWidth(45), resizeMode:"contain"}}/> 
        </View>
        </View>




        </ScrollView>
    </SafeAreaView>
  )
}

export default Pharmacy1;