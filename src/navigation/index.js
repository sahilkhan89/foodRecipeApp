import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
// import "../../global.css"
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDelailscreen from '../screens/RecipeDelailscreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> 
        <Stack.Screen name="RecipeDelail" component={RecipeDelailscreen} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
