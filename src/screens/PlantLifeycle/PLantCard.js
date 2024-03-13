// PlantCard.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Utils, colors } from '../../contants';


const plantImages = {
    'Coconut': 'https://img.freepik.com/free-photo/coconut-fruit_1203-2413.jpg?t=st=1708817918~exp=1708821518~hmac=4621c44c8e242bae5689972c711de794f7e2d1b47b09713017af8146b33c0389&w=996',
    'Mango' : 'https://www.freepik.com/free-photo/delicious-raw-mango-fruit-tree_21075346.htm#fromView=search&page=1&position=31&uuid=992aebdc-bcef-447c-8869-631aa31cb498',
    'Banana' : 'https://img.freepik.com/free-photo/palm-tree-with-green-bananas_169016-2273.jpg?w=996',
    'Beetroot' : 'https://img.freepik.com/free-photo/red-turnips-turnip-leaves-marble_114579-23528.jpg?t=st=1708834560~exp=1708838160~hmac=b054f67a8e00a907e1ad3af6a26bf5be452a6fef0790dd88ec21f4c13cdd8dd2&w=996'
  };
const PlantCard = ({ plant }) => {
      const imageUri = plantImages[plant.name];      
  return (
    <View style={styles.container}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.type}>{plant.type}</Text>
      <Text style={styles.soilType}>{plant.soilType}</Text>
    </View>
    <Image
      source={{ uri: 'https://img.freepik.com/free-photo/coconut-fruit_1203-2413.jpg?t=st=1708817918~exp=1708821518~hmac=4621c44c8e242bae5689972c711de794f7e2d1b47b09713017af8146b33c0389&w=996' }}
      style={styles.image}
    />
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    marginTop: Utils.ScreenHeight(2),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image:{
    height: Utils.ScreenHeight(10),
    width: Utils.ScreenWidth(30),
    resizeMode: 'contain',
    borderRadius: 8,
  },
  name: {
    marginTop: Utils.ScreenHeight(1),
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  type: {
    marginTop: Utils.ScreenHeight(1),
    fontSize: 12,
    color: '#555',
  },
  soilType: {
    marginTop: Utils.ScreenHeight(1),
    fontSize: 12,
    color: '#555',
  }
});

export default PlantCard;
