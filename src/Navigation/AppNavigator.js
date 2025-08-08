import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import CurrencyScreen from '../screens/AccountSetup/CurrencyScreen';
import GoalsScreen from '../screens/AccountSetup/GoalsScreen';
import CategoriesScreen from '../screens/AccountSetup/CategoriesScreen';
import ReadyScreen from '../screens/AccountSetup/ReadyScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Ready" component={ReadyScreen} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </>
  </NavigationContainer>
);

export default AppNavigator;
