import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}

    />
  </Stack.Navigator>
);

const ListStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ListScreen"
      component={ListScreen}
      options={{headerShown: false}}

    />
  </Stack.Navigator>
);

const MapStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{headerShown: false}}

    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Listas"
        component={ListStack}
        options={({route}) => ({
          tabBarLabel: 'Lista',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Mapa"
        component={MapStack}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
