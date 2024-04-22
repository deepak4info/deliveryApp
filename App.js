import React from 'react';
import NavigationApp from './src/Navigation/NavigationApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationApp />
      {/* <Text> Deepak code </Text> */}
    </GestureHandlerRootView>
  );
};

export default App;
