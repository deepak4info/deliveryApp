import React from 'react';
import NavigationApp from './src/Navigation/NavigationApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationApp />
    </GestureHandlerRootView>
  );
};

export default App;
