import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen/Login';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})