import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import SplashScreen from '../screens/onboradingScreenAndSplash/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import OnboardingScreen1 from '../screens/onboradingScreenAndSplash/Onboarding1';
import OnboardingScreen2 from '../screens/onboradingScreenAndSplash/Onboarding2';
import OnboardingScreen3 from '../screens/onboradingScreenAndSplash/Onboarding3';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="RootSplashScreen">
      <Stack.Screen
        name="RootSplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RootOnboardingScreen1"
        component={OnboardingScreen1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RootOnboardingScreen2"
        component={OnboardingScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RootOnboardingScreen3"
        component={OnboardingScreen3}
        options={{headerShown: false}}
      />
      <Stack.Screen name="RootHomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
