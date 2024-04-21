import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../Screens/HomeScreen/Home';
import CustomDrawerContent from './CustomDrawerContent/CustomDrawerContent';
import BottomNav from '../BottomNav/BottomNav';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomNav"
        component={BottomNav}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
