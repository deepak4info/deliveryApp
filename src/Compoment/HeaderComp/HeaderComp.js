<<<<<<< Updated upstream
import {Image, StyleSheet, Text, View} from 'react-native';
=======
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
>>>>>>> Stashed changes
import React from 'react';
import colorStyle from '../../style/colorStyle';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../style/responsiveSize';
import ImagePath from '../../Constable/ImagePath';
<<<<<<< Updated upstream
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderComp = ({MainText, LeftImage, RightImage, onPress = () => {}},onPressRight = () => {}) => {
  return (
    <View style={styles.Container}>
      {LeftImage ? (
        <TouchableOpacity onPress={onPress}>
=======

const HeaderComp = ({MainText, LeftImage, RightImage, navigation}) => {
  console.log('check navi', navigation());
  return (
    <View style={styles.Container}>
      {LeftImage ? (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            console.log('check navi2222', navigation);
          }}>
>>>>>>> Stashed changes
          <Image source={ImagePath.Menu} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.MainText}>{MainText}</Text>
      {RightImage ? (
<<<<<<< Updated upstream
       <TouchableOpacity onPress={onPress}>
         <Image source={ImagePath.AlertIcon} style={{width: 30, height: 30}}  />
       </TouchableOpacity>
=======
        <Image source={ImagePath.AlertIcon} style={{width: 30, height: 30}} />
>>>>>>> Stashed changes
      ) : null}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  Container: {
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
  },
  MainText: {
    color: colorStyle.themeColor,
    fontSize: scale(26),
    fontWeight: '700',
  },
});
