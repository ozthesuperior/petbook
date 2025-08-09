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
import MapScreen from '../screens/MapScreen';
import PetProfilesScreen from '../screens/PetProfilesScreen';
import ForumScreen from '../screens/ForumScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


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
        name="Profiles" 
        component={PetProfilesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="paw" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Forum" 
        component={ForumScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="chatbubbles" size={size} color={color} />
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
