import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const VetBookScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  // Sample vet records data
  const vetRecords = [
    {
      id: '1',
      date: '2023-05-15',
      vet: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary Clinic',
      reason: 'Annual Checkup',
      notes: 'All vitals normal. Updated vaccinations.',
    },
    {
      id: '2',
      date: '2023-01-10',
      vet: 'Dr. Michael Chen',
      clinic: 'Animal Care Center',
      reason: 'Limping Issue',
      notes: 'Minor strain in left hind leg. Prescribed rest and anti-inflammatory medication.',
    },
    {
      id: '3',
      date: '2022-08-22',
      vet: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary Clinic',
      reason: 'Skin Allergy',
      notes: 'Prescribed special diet and medicated shampoo.',
    },
  ];

  const upcomingAppointments = [
    {
      id: '4',
      date: '2023-06-20',
      time: '10:00 AM',
      vet: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary Clinic',
      reason: 'Vaccination',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>Vet Records</Text>
      
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddVetRecord')}
        >
          <Text style={styles.addButtonText}>+ Add Vet Record</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.map((appointment) => (
            <View key={appointment.id} style={styles.appointmentItem}>
              <Text style={styles.appointmentDate}>{appointment.date}</Text>
              <Text style={styles.appointmentTime}>{appointment.time}</Text>
              <Text style={styles.appointmentVet}>{appointment.vet}</Text>
              <Text style={styles.appointmentReason}>{appointment.reason}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Past Records</Text>
          {vetRecords.map((record) => (
            <View key={record.id} style={styles.recordItem}>
              <Text style={styles.recordDate}>{record.date}</Text>
              <Text style={styles.recordVet}>{record.vet}</Text>
              <Text style={styles.recordReason}>{record.reason}</Text>
              <Text style={styles.recordNotes}>{record.notes}</Text>
            </View>
          ))}
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
    margin: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
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
  appointmentCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  appointmentVet: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  appointmentClinic: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  appointmentReason: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  recordCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  recordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  recordDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  recordVet: {
    fontSize: 16,
    color: '#666',
  },
  recordClinic: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  recordReason: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  recordNotes: {
    fontSize: 14,
    color: '#666',
  },
});

export default VetBookScreen;
