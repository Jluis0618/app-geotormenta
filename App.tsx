import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CharactersScreen from './src/screens/CharacterScren';
import MomentsScreen from './src/screens/MomentsScreen';
import AboutScreen from './src/screens/AboutScreen';
import InMyLifeScreen from './src/screens/InMyLifeScreen';
import HireMeScreen from './src/screens/HireMeScreen';
import { RootStackParamList } from './src/types/navigation';

export const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1e3a8a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            cardStyle: {
              backgroundColor: '#0f172a',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Geotormenta' }} 
          />
          <Stack.Screen 
            name="Characters" 
            component={CharactersScreen} 
            options={{ title: 'Personajes' }} 
          />
          <Stack.Screen 
            name="Moments" 
            component={MomentsScreen} 
            options={{ title: 'Momentos' }} 
          />
          <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ title: 'Acerca de' }} 
          />
          <Stack.Screen 
            name="InMyLife" 
            component={InMyLifeScreen} 
            options={{ title: 'En Mi Vida' }} 
          />
          <Stack.Screen 
            name="HireMe" 
            component={HireMeScreen} 
            options={{ title: 'Contrátame' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}