
import React from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { } from 'react-native-svg';
import { Utils } from '../../contants';
const App = () => {
  const markerImage = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1024px-Taj-Mahal.jpg", width: 30, height: 30 };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          coordinate={{
            latitude: 20.5937,
            longitude: 78.9629,
            latitudeDelta: 6, // Adjust the latitudeDelta to zoom appropriately
            longitudeDelta: 6,
          }}
          customMapStyle={mapStyle}>


          {/* Mumbai */}
          <Marker

            coordinate={{
              "latitude": 19.076,
              "longitude": 72.8777
            }}
            title={'Home - Mumbai'}

            description={'Aamchi Mumbai'}

          >
            <Image source={{ uri: "https://i.pinimg.com/736x/c7/9f/84/c79f84c9c23611ae8850227bb4d4a73e.jpg" }} style={{ height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenHeight(1) }} />


          </Marker>
          {/* Kolkata */}
          <Marker

            coordinate={{
              "latitude": 22.5726,
              "longitude": 88.3639
            }}
            title={'Kolkata - The City of Joy'}

            description={'Your trip to kolkata last Year'}

          >
            <Image source={{uri:"https://i.pinimg.com/736x/e2/23/bf/e223bfafa2725bd1434f89e75536478e.jpg"}} style={{ height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenHeight(1) }} />
          </Marker>
          {/* Agra */}
          <Marker

            coordinate={{
              "latitude": 28.7041,
              "longitude": 77.1025
            }}
            title={'Agra - Where History Breathes'}

            description={'Your Trip to Agra Last year'}


          >
            <Image source={markerImage} style={{ height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenHeight(1) }} />
          </Marker>
          {/* Tirupati Balaji */}
          <Marker

            coordinate={{
              "latitude": 13.6288,
              "longitude": 79.4192
            }}
            title={'Tirupati Balaji - Gateway to Divine Blessings'}

            description={'Pilgrim to Tirupati Balaji'}

          >
            <Image source={{uri:"https://i.pinimg.com/736x/0f/5e/7f/0f5e7fe6484b39d9abca9c98d4940c13.jpg"}} style={{ height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenHeight(1) }} />
          </Marker>

          {/* <Marker
              key={Math.random()}
              coordinate={{
                latitude: 37.78825,
            longitude: -122.4324,
              }}
              icon={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1024px-Taj-Mahal.jpg"}}>
            </Marker> */}
        </MapView>
      </View>
    </SafeAreaView>
  );
};
export default App;
const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
  {

  }
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});