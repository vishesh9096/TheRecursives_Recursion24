import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Fertilizers = ({route}) => {
    const data = route.params.data
    const points = data.split(/\d+\./).filter(Boolean);
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
        <ScrollView style={{backgroundColor:colors.white , height:Utils.ScreenHeight(100)}}>
         <View style={{
                    flexDirection: "row",
                    marginBottom: Utils.ScreenHeight(3),
                    marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", backgroundColor: colors.white,
                }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image  source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>Fertilizers Recommendation </Text>
                </View>
        <View style={{marginHorizontal:Utils.ScreenWidth(5)}}>
        {points.map((point, index) => (
        <View key={index} style={styles.pointContainer}>
          <Text style={styles.point}>{index + 1}.</Text>
          <Text style={styles.pointText}>{point}</Text>
        </View>
      ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Fertilizers


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
    },
    pointContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10,
    },
    point: {
      marginRight: 5,
      fontSize:18
    },
    pointText: {
      flex: 1,
      fontSize:18
    },
  });