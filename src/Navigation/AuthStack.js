import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen/Login';
import Splash from '../Screens/SplashScreen/Splash';
import Onboarding from '../Screens/OnboardingScreen.js/Onboarding';
import {Text} from 'react-native';
import ForgotScreen from '../Screens/ForgotPasswordScreen/ForgotScreen';
import Register from '../Screens/RegistiorScreen/RegisterScreen.js/Register';
import OTPscreen from '../Screens/OTPScreen/OTPscreen';
import StepOne from '../Screens/StepScreen/StepOne';
import Home from '../Screens/HomeScreen/Home';
import DrawerNavigator from './Drawer/DrawerNavigator';
import GoogleMapScreen from '../Screens/GoogleMap';
import OrderStatus from '../Screens/OrderTrack/OrderStatus';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          // headerTitle:'',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OTPscreen"
        component={OTPscreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StepOne"
        component={StepOne}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen name="Drawer" component={DrawerNavigator} 
        options={{headerShown: false}}
        />
        {/* <Stack.Screen name='Order Status' component={OrderStatus}/> */}
           {/* <Stack.Screen name='GoogleMapScreen' component={GoogleMapScreen}/> */}

    </Stack.Navigator>
  );
};

export default AuthStack;
