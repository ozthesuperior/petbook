import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [showPetModal, setShowPetModal] = useState(false);
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
      breed: 'Labrador Retriever',
      age: '4 years',
      image: 'https://placedog.net/200/200?id=3',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>PetBook</Text>
        
        {/* Quick Actions Section */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsContainer}>
            <TouchableOpacity 
              style={styles.quickActionCard}
              onPress={() => {
                // Navigate to Map page with nearest vet filter checked
                navigation.navigate('Map', { activeFilter: 'vet' });
              }}
            >
              <Text style={styles.quickActionText}>Find a Vet</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickActionCard}
              onPress={() => navigation.navigate('AddEditProfile')}
            >
              <Text style={styles.quickActionText}>Add Pet to Record</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickActionCard}
              onPress={() => {
                // Show modal with pet list for sharing
                setShowPetModal(true);
              }}
            >
              <Text style={styles.quickActionText}>Share Pet Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Recommended Due Shots Section */}
        <View style={styles.shotsSection}>
          <Text style={styles.sectionTitle}>Recommended Due Shots</Text>
          <View>
            <TouchableOpacity 
              style={styles.shotItem}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.shotText}>Buddy needs Rabies shot</Text>
              <Text style={styles.shotDate}>Due: June 30, 2023</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.shotItem}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.shotText}>Buddy needs Rabies shot</Text>
              <Text style={styles.shotDate}>Due: June 30, 2023</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.shotItem}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.shotText}>Luna needs Bordetella shot</Text>
              <Text style={styles.shotDate}>Due: July 10, 2023</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>Upcoming Vet Visits</Text>
          <TouchableOpacity 
            style={styles.upcomingItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.upcomingText}>Buddy - Vaccination</Text>
            <Text style={styles.upcomingDate}>June 20, 2023 at 10:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.upcomingItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.upcomingText}>Luna - Checkup</Text>
            <Text style={styles.upcomingDate}>June 25, 2023 at 2:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.upcomingItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.upcomingText}>Max - Grooming</Text>
            <Text style={styles.upcomingDate}>July 5, 2023 at 11:00 AM</Text>
          </TouchableOpacity>
        </View>
        
        {/* Nearest Pet Shops Section */}
        <View style={styles.petShopsSection}>
          <Text style={styles.sectionTitle}>Nearest Pet Shops</Text>
          <TouchableOpacity 
            style={styles.petShopItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.petShopText}>PetSmart - 1.2 miles away</Text>
            <Text style={styles.petShopAddress}>123 Main St, Anytown, USA</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.petShopItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.petShopText}>Petco - 2.5 miles away</Text>
            <Text style={styles.petShopAddress}>456 Oak Ave, Anytown, USA</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.petShopItem}
            onPress={() => navigation.navigate('Map')}
          >
            <Text style={styles.petShopText}>Local Vet Pharmacy - 3.1 miles away</Text>
            <Text style={styles.petShopAddress}>789 Elm St, Anytown, USA</Text>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
      
      {/* Pet Selection Modal for Sharing */}
      <Modal
        visible={showPetModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setShowPetModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Pet to Share</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowPetModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {dogProfiles.map((pet) => (
              <TouchableOpacity 
                key={pet.id}
                style={styles.petItem}
                onPress={() => {
                  // Generate PDF and share (placeholder implementation)
                  Alert.alert(
                    'Share Pet Details',
                    `Would you like to generate a PDF for ${pet.name}?`,
                    [
                      { text: 'Cancel', style: 'cancel' },
                      { 
                        text: 'Generate PDF', 
                        onPress: () => {
                          setShowPetModal(false);
                          Alert.alert(
                            'PDF Generated',
                            `${pet.name}'s details have been compiled into a PDF. Sharing functionality would be implemented here.`,
                            [{ text: 'OK' }]
                          );
                        }
                      },
                    ]
                  );
                }}
              >
                <Image source={{ uri: pet.image }} style={styles.petImage} />
                <View style={styles.petInfo}>
                  <Text style={styles.petName}>{pet.name}</Text>
                  <Text style={styles.petBreed}>{pet.breed}</Text>
                  <Text style={styles.petAge}>{pet.age}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
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
  quickActionsSection: {
    marginTop: 16,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  quickActionCard: {
    backgroundColor: '#2196F3',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 8,
    minHeight: 60,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  petShopsSection: {
    marginTop: 16,
  },
  petShopItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  petShopText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  petShopAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  shotsSection: {
    marginTop: 16,
  },
  shotItem: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shotText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shotDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  forumSection: {
    marginTop: 16,
    marginBottom: 16,
  },
  forumItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  forumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  forumPreview: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  forumMeta: {
    fontSize: 12,
    color: '#999',
  },
  // Modal styles for pet sharing
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#2196F3',
  },
  petItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  petBreed: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  petAge: {
    fontSize: 14,
    color: '#999',
  },
});

export default HomeScreen;
