import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../Screens/HomeScreen/Home';
import CustomDrawerContent from './CustomDrawerContent/CustomDrawerContent';
import BottomNav from '../BottomNav/BottomNav';
import OrderStatus from '../../Screens/OrderTrack/OrderStatus';

const Drawer = createDrawerNavigator();
//main
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomNav"
        component={BottomNav}
        options={{headerShown: false}}
      />
      <Drawer.Screen name='Order Status' component={OrderStatus}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
