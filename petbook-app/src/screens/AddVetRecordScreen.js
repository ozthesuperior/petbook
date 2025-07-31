import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const AddVetRecordScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [date, setDate] = useState('');
  const [vetName, setVetName] = useState('');
  const [clinic, setClinic] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [treatment, setTreatment] = useState('');
  const [medication, setMedication] = useState('');
  const [cost, setCost] = useState('');
  
  const handleSave = () => {
    // Validation
    if (!date || !vetName || !clinic || !reason) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    // In a real app, you would save the data here
    Alert.alert(
      'Record Saved', 
      'Vet record has been saved successfully!',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>Add Vet Record</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visit Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="MM/DD/YYYY"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Veterinarian Name <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              value={vetName}
              onChangeText={setVetName}
              placeholder="Enter veterinarian name"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Clinic <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              value={clinic}
              onChangeText={setClinic}
              placeholder="Enter clinic name"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reason for Visit <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={reason}
              onChangeText={setReason}
              placeholder="Enter reason for visit"
              multiline
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Treatment Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Treatment Notes</Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={treatment}
              onChangeText={setTreatment}
              placeholder="Enter treatment details"
              multiline
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Medication</Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={medication}
              onChangeText={setMedication}
              placeholder="Enter prescribed medication"
              multiline
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Cost ($)</Text>
            <TextInput
              style={styles.input}
              value={cost}
              onChangeText={setCost}
              placeholder="Enter cost"
              keyboardType="numeric"
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Enter any additional notes"
              multiline
            />
          </View>
        </View>
        
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Record</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cancelButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  section: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
  },
  required: {
    color: '#ff0000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddVetRecordScreen;
