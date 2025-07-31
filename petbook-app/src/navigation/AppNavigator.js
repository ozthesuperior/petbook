import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DogProfileScreen from '../screens/DogProfileScreen';
import AddEditProfileScreen from '../screens/AddEditProfileScreen';
import VetBookScreen from '../screens/VetBookScreen';
import AddVetRecordScreen from '../screens/AddVetRecordScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VetBookStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="VetBook" 
        component={VetBookScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AddVetRecord" 
        component={AddVetRecordScreen}
        options={{ 
          headerShown: true,
          headerTitle: 'Add Vet Record',
          headerTintColor: '#2196F3',
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
          paddingTop: 5,
          height: 70,
        },
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={DogProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="paw" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="VetBook" 
        component={VetBookStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="medical" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="AddEditProfile" component={AddEditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
