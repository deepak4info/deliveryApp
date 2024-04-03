import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../style/responsiveSize';

const BtnComp = ({title, onPress, style,textStyle}) => (
  <TouchableOpacity style={[styles.loginBtn, style]} onPress={onPress}>
    <Text style={[styles.loginText,textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default BtnComp;

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 10,
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize:17
  },
});
