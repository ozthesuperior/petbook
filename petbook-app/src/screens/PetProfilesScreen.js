import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Swipeable } from 'react-native-gesture-handler';

const PetProfilesScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  // Sample data for dog profiles
  const [dogProfiles, setDogProfiles] = useState([
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
  ]);

  const swipeableRefs = useRef({});

  const handleDeleteProfile = (id, name) => {
    Alert.alert(
      'Delete Profile',
      `Are you sure you want to delete ${name}'s profile?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Snap back the tile if it exists
            if (swipeableRefs.current[id]) {
              swipeableRefs.current[id].close();
            }
          },
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setDogProfiles(dogProfiles.filter(dog => dog.id !== id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleAddProfile = () => {
    navigation.navigate('AddEditProfile');
  };

  const handleViewProfile = (id) => {
    navigation.navigate('Profile');
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => {}}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>My Pet Profiles</Text>
        
        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddProfile}
        >
          <Text style={styles.addButtonText}>+ Add New Pet Profile</Text>
        </TouchableOpacity>
        
        {dogProfiles.map((dog) => (
          <Swipeable
            key={dog.id}
            ref={ref => swipeableRefs.current[dog.id] = ref}
            renderRightActions={renderRightActions}
            onSwipeableOpen={(direction) => {
              if (direction === 'right') {
                handleDeleteProfile(dog.id, dog.name);
              }
            }}
          >
            <View style={styles.dogCardContainer}>
              <TouchableOpacity 
                style={styles.dogCard}
                onPress={() => handleViewProfile(dog.id)}
              >
                <Image source={{ uri: dog.image }} style={styles.dogImage} />
                <View style={styles.dogInfo}>
                  <Text style={styles.dogName}>{dog.name}</Text>
                  <Text style={styles.dogBreed}>{dog.breed}</Text>
                  <Text style={styles.dogAge}>{dog.age}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Swipeable>
        ))}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dogCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  dogCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PetProfilesScreen;
