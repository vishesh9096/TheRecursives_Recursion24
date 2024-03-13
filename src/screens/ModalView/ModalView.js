import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors, fonts } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { AppButton } from '../../component'
import TextInputCom from '../../component/InputTextView/TextInputCom'

const ModalView = () => {

    const[name,setname] = useState("")
    const[Quantity,setQuantity] = useState(0)

  return (
    <SafeAreaView>
        <View style={{marginHorizontal:Utils.ScreenWidth(2)}}>
     <View style={{
        flexDirection: "row",
        marginBottom: Utils.ScreenHeight(3),
        marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
      }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
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
                    onPress={() => { }} // getUpdateDocQualification()
                />
</View>                

</View>
    </SafeAreaView>
  )
}

export default ModalView