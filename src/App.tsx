import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './presentation/navegation/Navigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
