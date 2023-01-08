import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {InitialStack} from './index';

type Props = {};

const BaseNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
};

export default BaseNavigation;
