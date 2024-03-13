import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Utils, colors } from '../../contants';

const AddPlant = ({ route }) => {
  const { addNewPlant } = route.params;
  const navigation = useNavigation();
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [sowingDate, setSowingDate] = useState(new Date());
  const [soilType, setSoilType] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddPlant = () => {
    if (!plantName.trim() || !plantType.trim()) {
      return;
    }

    const newPlant = {
      name: plantName,
      type: plantType,
      sowingDate: sowingDate.toISOString().split('T')[0], // Convert to ISO string format
      soilType: soilType,
    };

    addNewPlant(newPlant);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/new-life-emerges-wet-spring-season-generative-ai_188544-7963.jpg?t=st=1708817287~exp=1708820887~hmac=c0e6320355cac018f278f6fe171fa043588bbbfa5617592e66ab2c478a10fd4e&w=996' }}
          style={{ height: Utils.ScreenHeight(28), width: '92%', marginLeft: Utils.ScreenWidth(4), marginRight: Utils.ScreenWidth(4), resizeMode: 'contain', marginTop: Utils.ScreenHeight(2), borderRadius: 10 }}
        />

        <View style={{ marginTop: Utils.ScreenHeight(1) }}>
          <View style={{ marginTop: Utils.ScreenHeight(1), marginBottom: Utils.ScreenHeight(2) }}>

            <View style={{ marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2) }}>
              <Text style={{ fontSize: 14, fontWeight: 600, color: colors.black }}>Enter the name of plant</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Plant Name"
                placeholderTextColor="#6B6060"
                value={plantName}
                onChangeText={setPlantName}
              />
            </View>

            <View style={{ marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2) }}>
              <Text style={{ fontSize: 14, fontWeight: 600, color: colors.black }}>Enter the type of plant</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Plant Type"
                placeholderTextColor="#6B6060"
                value={plantType}
                onChangeText={setPlantType}
              />
            </View>

            <View style={{ marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2) }}>
              <Text style={{ fontSize: 14, fontWeight: 600, color: colors.black }}>Sowing Date</Text>
            </View>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputContainer}>
              <Text style={styles.input}>{sowingDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={sowingDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowDatePicker(Platform.OS === 'ios');
                  setSowingDate(selectedDate || sowingDate);
                }}
              />
            )}

            <View style={{ marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2) }}>
              <Text style={{ fontSize: 14, fontWeight: 600, color: colors.black }}>Enter the type of soil</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Soil Type"
                placeholderTextColor="#6B6060"
                value={soilType}
                onChangeText={setSoilType}
              />
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleAddPlant}>
              <Text style={styles.buttonText}>Add Plant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  inputContainer: {
    borderColor: '#6B6060',
    borderWidth: 0.5,
    borderRadius: 14,
    marginLeft: Utils.ScreenWidth(3),
    height: 40,
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Utils.ScreenHeight(1),
    backgroundColor: colors.white,
  },
  input: {
    fontSize: 14,
    marginHorizontal: 3,
    maxWidth: '80%',
    color: colors.black,
    marginLeft: Utils.ScreenWidth(8),
  },
  addButton: {

    width: '96%',
    height: Utils.ScreenHeight(6),
    backgroundColor: colors.primary,
    marginHorizontal: Utils.ScreenWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: Utils.ScreenHeight(2),
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.white,
  },
};

export default AddPlant;
