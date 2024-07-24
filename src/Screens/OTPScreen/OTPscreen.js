import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import LeftComponent from '../../Compoment/LeftComponent/LeftComponent';

// Import your color styles (replace with your actual color values)
const colorStyle = {
  bgColor: '#1F1F1F', 
  buttonColor: '#FFCC00', 
  textColor: '#FFFFFF',
};

export default function OTPInput({ length = 4, onChangeOTP }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);
  const [didntReceive, setDidntReceive] = useState(false);

  const handleOnChangeText = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);

    // Move focus to next input field if value is entered and current input is not the last
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    // Move focus to previous input field if value is cleared and current input is not the first
    else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
    onChangeOTP && onChangeOTP(newOtp.join(''));
  };

  const handleResend = () => {
    setOtp(Array(length).fill(''));
    inputRefs.current[0].focus();
    setDidntReceive(!didntReceive);
    onChangeOTP && onChangeOTP('');
  };

  return (
    <View style={styles.container}>
            <LeftComponent onPress={() => navigation.goBack()} />

      <View style={styles.otpContainer}> 
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.inputBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleOnChangeText(index, text)}
            secureTextEntry={true}
            placeholder='*'
            placeholderTextColor={'gray'}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.didntReceive} onPress={handleResend}>
        <View style={[styles.checkbox, { backgroundColor: didntReceive ? colorStyle.buttonColor : 'transparent' }]} />
        <Text style={styles.didntReceiveText}>Didn't receive? Send again.</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyle.bgColor,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  inputBox: {
    width: 68,
    height: 59,
    borderWidth: 1,
    borderColor: colorStyle.buttonColor,
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center',
    padding: 0,
    marginHorizontal: 14, 
    color: colorStyle.textColor,
  },
  didntReceive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colorStyle.buttonColor,
    marginRight: 10,
    borderRadius: 5,
  },
  didntReceiveText: {
    color: colorStyle.buttonColor,
    fontWeight: '500',
  },
  nextButton: {
    width: '100%',
    backgroundColor: colorStyle.buttonColor,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  nextButtonText: {
    fontSize: 16,
    color: colorStyle.textColor,
    fontWeight: '700',
  },
});
