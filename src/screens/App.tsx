import {NavigationContainer} from '@react-navigation/native';
import React, {memo, useEffect} from 'react';
import {AppStackTab} from './AppStackTab';

const App = memo(() => {
  return (
    <NavigationContainer>
      <AppStackTab />
    </NavigationContainer>
  );
});

export default App;
