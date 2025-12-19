import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// Map disabled for Expo Go: using a visual placeholder instead of react-native-maps
import LeafletMap from '../components/LeafletMap';
const variable = 1;
const MapScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('vet');
  
  // Handle navigation parameters
  useEffect(() => {
    if (route?.params?.activeFilter) {
      setActiveFilter(route.params.activeFilter);
      
      // Update selected filters to ensure the active filter is selected
      setSelectedFilters(prev => ({
        ...prev,
        [route.params.activeFilter]: true
      }));
    }
  }, [route?.params?.activeFilter]);
  const [selectedFilters, setSelectedFilters] = useState({
    vet: true,
    store: false,
    hotel: false,
    shelter: false,
    training: false,
  });

  // Sample data for different locations
  const locations = {
    vet: [
      { id: '1', name: 'Animal Hospital', distance: '0.5 miles', address: '123 Veterinary St, Anytown, USA' },
      { id: '2', name: 'Pet Care Clinic', distance: '1.2 miles', address: '456 Animal Ave, Anytown, USA' },
      { id: '3', name: 'Emergency Vet Center', distance: '2.1 miles', address: '789 Pet Blvd, Anytown, USA' },
    ],
    store: [
      { id: '4', name: 'PetSmart', distance: '1.2 miles', address: '123 Main St, Anytown, USA' },
      { id: '5', name: 'Petco', distance: '2.5 miles', address: '456 Oak Ave, Anytown, USA' },
      { id: '6', name: 'Local Pet Store', distance: '3.1 miles', address: '789 Elm St, Anytown, USA' },
    ],
    hotel: [
      { id: '7', name: 'Paws & Claws Hotel', distance: '1.8 miles', address: '321 Boarding St, Anytown, USA' },
      { id: '8', name: 'Luxury Dog Resort', distance: '2.9 miles', address: '654 Luxury Ln, Anytown, USA' },
    ],
    shelter: [
      { id: '9', name: 'Animal Rescue Shelter', distance: '2.3 miles', address: '987 Rescue Rd, Anytown, USA' },
      { id: '10', name: 'Humane Society', distance: '3.5 miles', address: '654 Adoption Ave, Anytown, USA' },
    ],
    training: [
      { id: '11', name: 'Dog Training Academy', distance: '1.5 miles', address: '741 Training Trl, Anytown, USA' },
      { id: '12', name: 'Puppy School', distance: '2.7 miles', address: '852 Obedience Way, Anytown, USA' },
    ],
  };

  const filters = [
    { key: 'vet', label: 'Nearest Vet', icon: '🏥' },
    { key: 'store', label: 'Pet Store', icon: '🛍️' },
    { key: 'hotel', label: 'Pet Hotel', icon: '🏨' },
    { key: 'shelter', label: 'Animal Shelter', icon: '🐾' },
    { key: 'training', label: 'Training School', icon: '🎓' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.header}>Map View</Text>
        
        {/* Filter Buttons */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.key}
              style={styles.filterButton}
              onPress={() => {
                // Toggle the filter selection
                setSelectedFilters(prev => ({
                  ...prev,
                  [filter.key]: !prev[filter.key]
                }));
                
                // Set the active filter to the one just clicked
                setActiveFilter(filter.key);
              }}
            >
              {/* Checkbox indicator */}
              <View style={styles.checkboxContainer}>
                <View style={[
                  styles.checkbox,
                  selectedFilters[filter.key] && styles.checkboxSelected
                ]}>
                  {selectedFilters[filter.key] && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </View>
              <Text style={styles.filterIcon}>{filter.icon}</Text>
              <Text style={styles.filterText}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Map: Leaflet on web, placeholder on native via platform file */}
        <View style={styles.mapContainer}>
          <LeafletMap locations={locations} selectedFilters={selectedFilters} />
        </View>
        
        {/* Locations List */}
        <View style={styles.locationsContainer}>
          {Object.keys(locations).map((filterKey) => {
            // Only show locations for selected filters
            if (selectedFilters[filterKey]) {
              return locations[filterKey].map((location) => (
                <TouchableOpacity key={location.id} style={styles.locationItem}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationDistance}>{location.distance}</Text>
                  <Text style={styles.locationAddress}>{location.address}</Text>
                </TouchableOpacity>
              ));
            }
            return null;
          })}
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  mapContainer: {
    height: 400,
    backgroundColor: '#e0e0e0',
    margin: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mapPlaceholder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  mapDescription: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: 80,
  },
  checkboxContainer: {
    marginRight: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  filterIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  locationsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  locationItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  locationDistance: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MapScreen;
