import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {moderateScaleVertical} from '../../../style/responsiveSize';
import colorStyle from '../../../style/colorStyle';

const menuItems = [
  {
    name: 'Home',
    icon: require('../../../assets/images/home.png'),
    route: 'Home',
  },
  {
    name: 'My Orders',
    icon: require('../../../assets/images/order.png'),
    route: 'Order Status',
  },
  {
    name: 'My Transactions',
    icon: require('../../../assets/images/trans.png'),
    route: 'My Transactions',
  },
  {
    name: 'Notifications',
    icon: require('../../../assets/images/bell.png'),
    route: 'Notifications',
  },
  {
    name: 'My Addresses',
    icon: require('../../../assets/images/address.png'),
    route: 'My Addresses',
  },
  {name: 'Refer a Friend', icon: '', route: 'Refer Friend'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(22),
    borderBottomWidth: 1,
    padding: 10,
    width: '100%',
    borderColor: colorStyle.whiteColor,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: 20,
    borderColor: colorStyle.whiteColor,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  logoutContainer: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    padding: 20,
  },
  logoutItem: {
    flexDirection: 'row',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
  },
});

const CustomDrawerContent = ({navigation}) => {
  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.item, {borderBottomWidth: item.name === 'Refer a Friend' ? 0: 1}]}
        onPress={() => navigation.navigate(item.route)}>
        {item.icon !== '' && (
          <Image
            source={item.icon}
            style={[
              menuItemStyles.menuItemIcon,
              {
                tintColor:
                  item.name === 'Notifications' ? colorStyle.whiteColor : null,
              },
            ]}
          />
        )}
        <Text style={styles.menuItemText}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={menuItemStyles.profileImage}
          />
          <View style={menuItemStyles.profileText}>
            <Text style={menuItemStyles.profileMainText}>Test</Text>
            <Text style={menuItemStyles.profileSubText}>1234567789</Text>
          </View>
        </View>
        {renderMenuItems()}
      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.closeDrawer()}>
        <Image
          source={require('../../../assets/images/close.png')}
          style={menuItemStyles.closeIcon}
        />
      </TouchableOpacity>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutItem}
          onPress={() => navigation.closeDrawer()}>
          <Image
            source={require('../../../assets/images/logout.png')}
            style={menuItemStyles.logoutIcon}
          />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const menuItemStyles = StyleSheet.create({
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileText: {
    marginLeft: 10,
  },
  profileMainText: {
    color: 'white',
    fontSize: 18,
  },
  profileSubText: {
    color: 'white',
    fontSize: 14,
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colorStyle.whiteColor,
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default CustomDrawerContent;
