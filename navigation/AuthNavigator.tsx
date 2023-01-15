import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from "../pages/Auth/Onboarding";

const authStack = createNativeStackNavigator();

const AuthStack = (props: Props) => {
  return (
    <authStack.Navigator screenOptions={{ headerShown: false }}>
      <authStack.Screen name="Onboarding" component={Onboarding} />
    </authStack.Navigator>
  );
};

export default AuthStack;
