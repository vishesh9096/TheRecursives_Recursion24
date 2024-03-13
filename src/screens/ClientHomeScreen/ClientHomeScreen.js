import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { FlatList } from 'react-native-gesture-handler'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'
import Helper from '../../Lib/Helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ClientHomeScreen = () => {
    const navigation = useNavigation();
    const getdata= async ()=>{

      const storedData = await AsyncStorage.getItem('name')
      console.log('idar dekho',JSON.parse(storedData))
    }
    useEffect(() => {

      
    }, [])
    
   

    const latestdata = [
      { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago", image:ImagesPath.LegalBridge.c1 },
      { id: '2', header: "News Updates", title: "Preventing Multiplicity And Streamlining Processes For ...", duration: "30 min ago" ,image:ImagesPath.LegalBridge.c2 },
      { id: '3', header: "High Court", title: "Gujarat High Court Weekly Round-Up: August 28 To ...", duration: "45 min ago",image:ImagesPath.LegalBridge.c3 },
      { id: '4', header: "Supreme Court", title: "Manipur Violence | Following Supreme Court's Direction ...", duration: "50 min ago" ,image:ImagesPath.LegalBridge.c4},
      

  ];
    const [searchText, setSearchtext] = useState("")
   
    const latest = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                    <View>
                        <Image source={item?.image}
                            style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
                    </View>
                    <View style={{flex:1, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}> {item.header} </Text>
                        <Text style={{fontSize:15, fontWeight:400}}> {item.title} </Text>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}>{item.duration} </Text>
                        
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <ScrollView style={{}}>
                <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8

                    , marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchtext(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(3), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{alignSelf:"center", marginTop:Utils.ScreenHeight(3)}}>
                      <Image style={{ height:Utils.ScreenHeight(16), width:Utils.ScreenWidth(90), borderRadius:15}} source={ImagesPath.home.b1}/>
                    </TouchableOpacity>
               
                <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal style={{marginHorizontal:Utils.ScreenWidth(4)}}>
                <View style={{marginTop:Utils.ScreenHeight(5), marginHorizontal:Utils.ScreenWidth(2)}}>
                <TouchableOpacity style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28),borderRadius:15}}>
                  <Image source={ImagesPath.home.p1} style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28), borderRadius:15,resizeMode:"contain"}}/>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:Utils.ScreenHeight(5), marginHorizontal:Utils.ScreenWidth(2)}}>
                <TouchableOpacity style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28),}}>
                  <Image source={ImagesPath.home.p2} style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28),borderRadius:15, resizeMode:"contain"}}/>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:Utils.ScreenHeight(5), marginHorizontal:Utils.ScreenWidth(2)}}>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("Pharmacy1")}}
                style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28)}}>
                  <Image source={ImagesPath.home.p3} style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(28),borderRadius:15, resizeMode:"contain"}}/>
                </TouchableOpacity>
                </View>
               
                </ScrollView>

                <TouchableOpacity
                onPress={()=>{navigation.navigate("PlantLifecycle")}}
                style={{alignSelf:"center", marginTop:Utils.ScreenHeight(3)}}>
                      <Image style={{ height:Utils.ScreenHeight(16), width:Utils.ScreenWidth(90),

                        borderRadius:15}} source={ImagesPath.home.b2}/>
                    </TouchableOpacity>

                
                <View style={{
                  marginTop:Utils.ScreenHeight(3),
                  borderWidth:0.5,borderColor:colors.grey2, borderRadius:12,
                  marginHorizontal:Utils.ScreenWidth(4), flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <View >
                  <Image source={ImagesPath.LegalBridge.appoinment}
                  style={{height:Utils.ScreenHeight(13), width:Utils.ScreenWidth(45),
                  resizeMode:"contain", 
                  }}
                  />
                </View>

                <View>
                  <Text style={{fontSize:Utils.ScreenHeight(1.8),fontWeight:450}}>TODAY'S Order</Text>
                  <Text style={{fontWeight:300, marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.5)}}>Order Confirmed {'\n'} Vishesh Gatha</Text>
                  <TouchableOpacity 
                  onPress={()=>{navigation.navigate("VideoCall")}}
                  style={{alignSelf:"center", marginTop:Utils.ScreenHeight(1)
                ,backgroundColor:colors.primary, borderRadius:12
                
                }}>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), color:colors.white,paddingVertical:Utils.ScreenHeight(0.7),
                    paddingHorizontal:Utils.ScreenWidth(8)
                    }}>Connect</Text>
                  </TouchableOpacity>
                </View>
                </View>
                {/* <View style={{marginTop:Utils.ScreenHeight(3)}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Quick Tabs </Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>View All</Text>
                    </View>
                    <View style={{marginHorizontal:Utils.ScreenWidth(4),flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                      <TouchableOpacity>
                        <Image source={ImagesPath.LegalBridge.apply} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>{navigation.navigate("CheckStatus")}}
                      >
                        <Image source={ImagesPath.LegalBridge.checkstatus} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={ImagesPath.LegalBridge.resumeapplication} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                    </View>
                  <View style={{marginBottom:Utils.ScreenHeight(3), marginTop:Utils.ScreenHeight(3)}}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Get Virtual Reality Experience </Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>Try Now</Text>
                   
                   
                    </View>
                    
                    

                  </View>
                
                </View>
                 */}
                {/* <View style={{ marginTop: Utils.ScreenHeight(3),marginHorizontal: Utils.ScreenWidth(4) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Explore</Text>

                    </View>
                 
                </View> */}

                {/* <TouchableOpacity
                  onPress={()=>{navigation.navigate("policies")}}
                  style={{borderWidth:1,
                      flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
                      height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3112/3112993.png"}}
                  style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
                  />
                  <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Anonymous Appoinment</Text>

                  </TouchableOpacity> */}





            </ScrollView>
        </View>
    )
}

export default ClientHomeScreen;
