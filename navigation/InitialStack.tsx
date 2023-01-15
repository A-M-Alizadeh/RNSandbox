import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home, Post, Test, Landing } from '../pages';

type Props = {};

const InitialStack = (props: Props) => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}>
      <stack.Screen name="Splash" component={Splash} />
      <stack.Screen name="Landing" component={Landing} />
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Post" component={Post} />
      <stack.Screen name="Test" component={Test} />
    </stack.Navigator>
  );
};

export default InitialStack;
