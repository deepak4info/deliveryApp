import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'
import React from 'react'

const BtnComp = ({ title, onPress }) => (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );

export default BtnComp

const styles = StyleSheet.create({
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      loginText: {
        color: 'white',
      },
})