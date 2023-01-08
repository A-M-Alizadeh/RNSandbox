import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home } from '../pages';

type Props = {};

const InitialStack = (props: Props) => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName="Splash">
      <stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  );
};

export default InitialStack;
