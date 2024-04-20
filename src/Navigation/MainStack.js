
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './Drawer/DrawerNavigator';
import Search from '../Screens/HomeScreen/Search';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerNavigator} 
        options={{headerShown: false}}
        />
        <Stack.Screen name='Search' component={Search}/>
      </Stack.Navigator>
  )
}

export default MainStack

