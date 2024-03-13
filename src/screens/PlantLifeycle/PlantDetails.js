import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Utils, colors } from '../../contants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../component/AppButton';

const PlantDetails= ({ route }) => {
    const navigation = useNavigation();
    console.log('Route Params:', route.params);
    const { plant } = route.params; 
    const [plants, setPlants] = useState([]);


    const handleDeletePlant = async () => {
        try {
          const plantsData = await AsyncStorage.getItem('plants');
          let plants = [];
          if (plantsData !== null) {
            plants = JSON.parse(plantsData);
          }

          const index = plants.findIndex((p) => p.name === plant.name);
          const updatedPlants = plants.filter((p) => p.name !== plant.name);
    
          if (index !== -1) {
            plants.splice(index, 1);
          }
    
          await AsyncStorage.setItem('plants', JSON.stringify(plants));
          setPlants(updatedPlants);
    
          navigation.goBack();
        } catch (error) {
          console.error('Error deleting plant:', error);
        }
      };
  return (
    <SafeAreaView>

   <Text style = {{color: colors.black, fontSize: 20, fontWeight: 600, marginHorizontal: Utils.ScreenWidth(4), marginTop: Utils.ScreenHeight(2)}}>{plant.name}</Text>

    <View style = {{flexDirection: 'row', marginHorizontal: Utils.ScreenWidth(4), marginTop: Utils.ScreenHeight(4)}}>
      <Image source={{ uri: 'https://img.freepik.com/free-photo/coconut-fruit_1203-2413.jpg?t=st=1708817918~exp=1708821518~hmac=4621c44c8e242bae5689972c711de794f7e2d1b47b09713017af8146b33c0389&w=996' }}
        style = {{height: Utils.ScreenHeight(10), width: Utils.ScreenWidth(20), borderRadius: 20, }}/>
        <View style = {{marginHorizontal: Utils.ScreenWidth(8), marginTop: Utils.ScreenHeight(1)}}>
      <Text style = {{color: colors.black, marginTop: Utils.ScreenHeight(2)}}>Type: {plant.type}</Text>
      <Text style = {{color: colors.black, marginTop: Utils.ScreenHeight(1)}}>Sowing Date: {plant.sowingDate}</Text>
      </View>
      </View>

        <View style = {{marginHorizontal: Utils.ScreenWidth(3), backgroundColor: colors.white, marginTop: Utils.ScreenHeight(2), borderRadius: 10}}>
            <Text style = {{color: colors.black, marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), marginBottom: Utils.ScreenHeight(3)}}>
    {"\u2022"} Botanical Name: Cocos nucifera {"\n"}
    {"\u2022"} Origin: Southeast Asia and the Pacific {"\n"}
    {"\u2022"} Description: Tall palm trees bearing round coconuts {"\n"}
    {"\u2022"} Growing Conditions: Tropical climate, well-drained soil, ample sunlight {"\n"}
    {"\u2022"} Propagation: Seeds planted in soil {"\n"}
    {"\u2022"} Growth Cycle: Germination, seedling, juvenile, reproductive stages {"\n"}
    {"\u2022"} Uses: Water, flesh, and oil from coconuts; coir from husks; timber from trunk {"\n"}
    {"\u2022"} Pests and Diseases: Beetles, mites, fungal infections {"\n"}
    {"\u2022"} Harvesting: Year-round once mature {"\n"}
    {"\u2022"} Economic Importance: Vital for many tropical economies
  </Text>
        </View>

      <TouchableOpacity style={{
        width: '96%',
        height: Utils.ScreenHeight(6),
        backgroundColor: colors.primary,
        marginHorizontal: Utils.ScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: Utils.ScreenHeight(2),
      }} >
              <Text style={{ fontSize: 16,
    fontWeight: 600,
    color: colors.white,}}>Protection of plants</Text>
        </TouchableOpacity>

      <TouchableOpacity style={{
        width: '96%',
        height: Utils.ScreenHeight(6),
        backgroundColor: colors.primary,
        marginHorizontal: Utils.ScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: Utils.ScreenHeight(2),
      }} >
              <Text style={{ fontSize: 16,
    fontWeight: 600,
    color: colors.white,}}>Harvesting tools needed</Text>
        </TouchableOpacity>


      <TouchableOpacity style={{ alignItems: 'center', marginTop: Utils.ScreenHeight(4) }} onPress={handleDeletePlant}>
        <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>Delete Plant</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlantDetails;
