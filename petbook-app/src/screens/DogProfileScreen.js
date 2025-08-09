import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const DogProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  // Sample dog profile data
  const dogProfile = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '3 years',
    gender: 'Male',
    weight: '32 kg',
    birthday: 'May 15, 2020',
    image: 'https://placedog.net/300/300?id=1',
    foodDiet: 'Premium dry food, 2 cups daily',
    healthInfo: 'All vaccinations up to date, no allergies',
    origin: {
      birthplace: 'California, USA',
      breeder: 'Sunshine Golden Retrievers',
      registration: 'AKC Registered',
    },
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={[styles.headerSection, { paddingTop: insets.top + 16 }]}>
          <Image source={{ uri: dogProfile.image }} style={styles.dogImage} />
          <View style={styles.headerInfo}>
            <Text style={styles.dogName}>{dogProfile.name}</Text>
            <Text style={styles.dogBreed}>{dogProfile.breed}</Text>
            <Text style={styles.dogAge}>{dogProfile.age} • {dogProfile.gender}</Text>
          </View>
        </View>
      
      <TouchableOpacity 
        style={styles.editButton}
        onPress={() => navigation.navigate('AddEditProfile')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight:</Text>
          <Text style={styles.infoValue}>{dogProfile.weight}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Age:</Text>
          <Text style={styles.dogAge}>{dogProfile.age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Birthday:</Text>
          <Text style={styles.infoValue}>{dogProfile.birthday}</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Food & Diet</Text>
        <Text style={styles.infoText}>{dogProfile.foodDiet}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Information</Text>
        <Text style={styles.infoText}>{dogProfile.healthInfo}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Origin</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Birthplace:</Text>
          <Text style={styles.infoValue}>{dogProfile.origin.birthplace}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Breeder:</Text>
          <Text style={styles.infoValue}>{dogProfile.origin.breeder}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Registration:</Text>
          <Text style={styles.infoValue}>{dogProfile.origin.registration}</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.vetButton}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.vetButtonText}>View Vet Records</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerSection: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dogImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
  },
  dogName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dogBreed: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  dogAge: {
    fontSize: 16,
    color: '#999',
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    width: 100,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  vetButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  vetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DogProfileScreen;
