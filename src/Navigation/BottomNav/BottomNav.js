import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GoogleMapScreen from '../../Screens/GoogleMap';
import OrderStatus from '../../Screens/OrderTrack/OrderStatus';
import Home from '../../Screens/HomeScreen/Home';
import ProfileScreen from '../../Screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={GoogleMapScreen} /> 
      <Tab.Screen name="Order Status" component={OrderStatus} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
