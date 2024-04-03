import { StyleSheet, Text, View,TextInput,TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'

const InputField = ({ placeholder, value, onChangeText, secureTextEntry ,keyboardType,style}) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    return(
    <View style={styles.inputView}>
      <TextInput
        style={[styles.inputText,style]} 
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        keyboardType={keyboardType}      />
    {secureTextEntry && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Image source={isPasswordVisible? require('../../assets/images/eyehidden.png') :require('../../assets/images/eye.png')} style={{width:25, height:25, }}/>
        </TouchableOpacity>
      )}
    </View>
  )
};

export default InputField

const styles = StyleSheet.create({
    inputView: {
        width: '80%',
        backgroundColor: '#fefefe',
        borderRadius: 10,
        height: 55,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth:.5
      },
      inputText: {
        flex: 1,
        height: 50,
        color: 'black',
      },
      toggleButton: {
        padding: 10,
      },

})