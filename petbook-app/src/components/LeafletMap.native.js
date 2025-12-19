import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeafletMap() {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Map</Text>
      </View>
      <Text style={styles.title}>Map Preview Unavailable</Text>
      <Text style={styles.subtitle}>
        This is a static placeholder shown in Expo Go. A real map will appear in a dev/prod build.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 24,
    textAlign: 'center',
  },
});
