import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'
import PlantCard from './PLantCard'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PlantLifecycle = () => {
    const navigation = useNavigation();
    const [plants, setPlants] = useState([]);
  
    useEffect(() => {
      loadPlants();
    }, []);
  
    useEffect(() => {
      savePlants();
    }, [plants]);
  
    const addNewPlant = (newPlant) => {
      setPlants([...plants, newPlant]);
    };
  
    const savePlants = async () => {
      try {
        await AsyncStorage.setItem('plants', JSON.stringify(plants));
      } catch (error) {
        console.error('Error saving plants data:', error);
      }
    };
  
    const loadPlants = async () => {
      try {
        const plantsData = await AsyncStorage.getItem('plants');
        if (plantsData !== null) {
          setPlants(JSON.parse(plantsData));
        }
      } catch (error) {
        console.error('Error loading plants data:', error);
      }
    };
  
    return (
      <SafeAreaView>
        <View style={{ marginHorizontal: Utils.ScreenWidth(4), marginTop: Utils.ScreenHeight(2) }}>
          <Text style={{ fontSize: 20, fontWeight: 800, color: colors.black }}>
            My Farms
          </Text>
        </View>
  
        <View>
          {plants.map((plant, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => navigation.navigate('PlantDetails', { plant })}>
              <PlantCard plant={plant} />
            </TouchableOpacity>
          ))}
        </View>
  
        {plants.length === 0 && (
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: '80%' }} onPress={() => navigation.navigate('addPlant', { addNewPlant })}>
            <Image source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-texture-asian-farmer-illustrated_23-2149741572.jpg?t=st=1708809309~exp=1708812909~hmac=748bf14bbd9940f7e61ad548d4d780b14d3653593badc12031b851471511032e&w=740' }} style={{ height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(64), resizeMode: 'contain', borderRadius: 200 }} />
          </TouchableOpacity>
        )}
  
        <View style={{ bottom: 0, width: '100%' }}>
          <TouchableOpacity style={{ width: '96%', height: Utils.ScreenHeight(6), backgroundColor: colors.primary, marginHorizontal: Utils.ScreenWidth(2), justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: Utils.ScreenHeight(4) }} onPress={() => navigation.navigate('addPlant', { addNewPlant })}>
            <Text style={{ fontSize: 16, fontWeight: 600, color: colors.white }}>+ Add New</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  export default PlantLifecycle;
