import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BanksContainer from '../containers/BanksContainer';

const Stack = createNativeStackNavigator();

const Navigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bancos" component={BanksContainer} />
    </Stack.Navigator>
  );
};

export default Navigator;
