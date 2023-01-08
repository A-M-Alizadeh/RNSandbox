import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home, Post } from '../pages';

type Props = {};

const InitialStack = (props: Props) => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName="Splash">
      <stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Post" component={Post} />
    </stack.Navigator>
  );
};

export default InitialStack;
