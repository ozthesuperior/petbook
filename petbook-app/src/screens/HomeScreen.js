import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  // Sample data for dog profiles
  const dogProfiles = [
    {
      id: '1',
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: '3 years',
      image: 'https://placedog.net/200/200?id=1',
    },
    {
      id: '2',
      name: 'Luna',
      breed: 'Siberian Husky',
      age: '2 years',
      image: 'https://placedog.net/200/200?id=2',
    },
    {
      id: '3',
      name: 'Max',
      breed: 'German Shepherd',
      age: '4 years',
      image: 'https://placedog.net/200/200?id=3',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>My Dogs</Text>
      
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddEditProfile')}
        >
          <Text style={styles.addButtonText}>+ Add New Dog</Text>
        </TouchableOpacity>
      
        {dogProfiles.map((dog) => (
          <TouchableOpacity 
            key={dog.id}
            style={styles.dogCard}
            onPress={() => navigation.navigate('Profile')}
          >
            <Image source={{ uri: dog.image }} style={styles.dogImage} />
            <View style={styles.dogInfo}>
              <Text style={styles.dogName}>{dog.name}</Text>
              <Text style={styles.dogBreed}>{dog.breed}</Text>
              <Text style={styles.dogAge}>{dog.age}</Text>
            </View>
          </TouchableOpacity>
        ))}
      
        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>Upcoming Vet Visits</Text>
          <View style={styles.upcomingItem}>
            <Text style={styles.upcomingText}>Buddy - Vaccination</Text>
            <Text style={styles.upcomingDate}>June 20, 2023 at 10:00 AM</Text>
          </View>
        </View>
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
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dogCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dogImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  dogInfo: {
    flex: 1,
  },
  dogName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dogBreed: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  dogAge: {
    fontSize: 14,
    color: '#999',
  },
  upcomingSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  upcomingItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  upcomingText: {
    fontSize: 16,
    color: '#333',
  },
  upcomingDate: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 4,
  },
});

export default HomeScreen;
