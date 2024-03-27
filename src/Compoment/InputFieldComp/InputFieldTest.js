import { StyleSheet, Text, View,TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const InputFieldTest = ({placeholder, value, onChangeText,secureTextEntry}) => {
    const [isPasswordVisible, setPasswordVisible]=useState(false);
  return (
    <View>
     <TextInput
     placeholder={placeholder}
     placeholderTextColor='red'
     onChangeText={onChangeText}
     value={value}
     secureTextEntry={!isPasswordVisible && secureTextEntry}
     />
    {
        secureTextEntry && (
            <TouchableOpacity
            onPress={()=> setPasswordVisible(!isPasswordVisible)}
            >
                <Text>{isPasswordVisible ? 'show' : 'hidden'} </Text>
            </TouchableOpacity>
        )
    }

    </View>
  )
}

export default InputFieldTest

const styles = StyleSheet.create({})