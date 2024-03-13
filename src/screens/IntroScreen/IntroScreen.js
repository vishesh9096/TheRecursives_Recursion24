import React, { useState } from "react";

import { FlatList, Modal, SafeAreaView, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Utils, colors } from "../../contants";
import ImagesPath from "../../assests/ImagesPath";
import ApiUrl from "../../Lib/ApiUrl";
import { translation } from "../uutils";


const OnboardWelcome = (props) => {
    const [selectedLang, setSelectedLang] = useState(0);
  const [langModalVisible, setLangModalVisible] = useState(false)
  
  const [languages, setLanguages] = useState([
    { name: 'English', selected: true },
    { name: 'हिंदी', selected: false },
    { name: 'मराठी', selected: false },
  ]);


  const saveSelectedLang = async index =>
  {
    await AsyncStorage.setItem("LANG",index)
  };

  const onSelect = index => {
    const temp = languages;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
          saveSelectedLang(index)
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLanguages(temp2);
  };

  const LanguageModal = () => {

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={langModalVisible}
        onRequestClose={() => {
          setLangModalVisible(!langModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <ActivityIndicator size={'large'} /> */}

            <Text onPress={() => { setLangModalVisible(false) }}>Close</Text>
            <Text style={{ fontSize: 16 }}>Select Language</Text>
            <View style={{ width: '80%' }}>
              <FlatList data={languages} renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity 
                  onPress={()=>{setSelectedLang(index)
                
                setLangModalVisible(false)
                }}
                  style={styles.languageItem}>
                    <Text>
                      {item.name}
                    </Text>

                  </TouchableOpacity>
                )
              }} />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => { setLangModalVisible(false)}} 
              style={{ width: '40%', height: 50, borderWidth:0.5, borderRadius: 10,justifyContent:'center', alignItems:'center'}}>
              <Text >
                Cancel
              </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{ width: '40%', height: 50, borderWidth:0.5, borderRadius: 10,justifyContent:'center', alignItems:'center',backgroundColor:'#017369'}} 
              onPress={() => {
                setLangModalVisible(false);
                onSelect(selectedLang);

              }}>
              <Text style={{color:'white'}}>
                Apply
              </Text>
              </TouchableOpacity> */}

            </View>
          </View>
        </View>
      </Modal>

    );
  };
    const {navigation} = props
    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.white}}/>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Test")}}
            style={{position:"absolute", right:Utils.ScreenWidth(10), borderWidth:0.5, zIndex:5000}}>

                <Image
                source={{uri:"https://cdn-icons-png.flaticon.com/512/11414/11414382.png"}}
                style={{height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}
                />
            </TouchableOpacity>
            <Image style={{
           
                width: Utils.ScreenWidth(100), height: Utils.ScreenHeight(70), resizeMode:'contain' }} source={ImagesPath.onafterprint.intro} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>
                
            <View>
        {/* <TouchableOpacity>
          <Text>
            {selectedLang==0?translation[0].English:
             selectedLang==1?translation[0].Hindi:
             selectedLang==2?translation[0].Marathi:
             selectedLang==3?translation[0].Gujarati:
             selectedLang==4?translation[0].Urdu: null
             }
             
          </Text>
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity style={{
        borderWidth: 0.5,
        width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2), 
      }} onPress={() => {
        setLangModalVisible(!langModalVisible)
      }}>
        <Text style={{ fontSize: 16, fontWeight: '800' }}> {selectedLang==0?translation[1].English:
             selectedLang==1?translation[1].Hindi:
             selectedLang==2?translation[1].Marathi: null
             
             } </Text>


      </TouchableOpacity>



      <LanguageModal 
      onSelectingLang
      />


               {/* <Text style={{fontSize:Utils.ScreenHeight(3), fontWeight:500}}>Indias #1 {'\n'} Career Recommendation App</Text> */}
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Loginclient')
                }}
                style={{ backgroundColor: colors.primary, width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2) }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>{selectedLang==0?translation[2].English:
             selectedLang==1?translation[2].Hindi:
             selectedLang==2?translation[2].Marathi: null
             
             }</Text>
                </TouchableOpacity>
              


          
            </View>
        </View>
        </>
    )
}
export default OnboardWelcome;




const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0,0,0,.5)',
  
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
  
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: Utils.ScreenWidth(100),
  
    },
  
    languageItem: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 100
    },
    buttons: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20
  
    }
  });
  
  