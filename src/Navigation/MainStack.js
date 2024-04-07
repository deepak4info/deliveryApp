
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}

export default MainStack

