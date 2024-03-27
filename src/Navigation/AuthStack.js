import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen/Login';
import Splash from '../Screens/SplashScreen/Splash';
import Onboarding from '../Screens/OnboardingScreen.js/Onboarding';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} 
        options={{ headerShown:false }}
      />
      <Stack.Screen name='Onboarding' component={Onboarding}
      options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
  )
}

export default AuthStack

