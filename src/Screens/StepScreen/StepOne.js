import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BtnComp from '../../Compoment/ButtonComp/BtnComp';
import colorStyle from '../../style/colorStyle';
import {scale} from '../../style/responsiveSize';
import StatusBarComponent from '../../Compoment/StatusBarComponent';
import LeftComponent from '../../Compoment/LeftComponent/LeftComponent';
import InputField from '../../Compoment/InputFieldComp/InputField';
import {useNavigation} from '@react-navigation/native';

const StepOne = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [driverLicenseExpiry, setDriverLicenseExpiry] = useState('');
  const [step, setStep] = useState(1); // Initialize current step to 1

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Navigate to the home screen
      navigation.navigate('Home')
    }
  };

  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Aadhaar Number:', aadhaarNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Driver License Expiry:', driverLicenseExpiry);

    // Your login logic goes here
  };

  const handleRegister = () => {
    navigation.navigate('Register');
    console.log('Going to Register Page');
  };

  const handleForgot = () => {
    navigation.navigate('ForgotScreen');
    console.log('Going to OTP Page');
  };

  return (
    <View style={styles.container}>
      <StatusBarComponent />
      <LeftComponent onPress={() => navigation.goBack()} />
      <View style={styles.formContainer}>
        <Text style={styles.stepText}>Step {step} of 5</Text>
        <Text style={styles.titleText}>Create your account</Text>
        <Text style={[styles.titleText, {fontSize: 19}]}>
          Basic Information
        </Text>

        {/* Conditionally render fields based on the current step */}
        {step === 1 && (
          <>
            <InputField
              style={styles.inputFields}
              placeholder="Name (as shown on ID)"
              // value={username}
              onChangeText={text => setUsername(text)}
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional)"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </>
        )}
        {step === 2 && (
          <>
            <InputField
              style={styles.inputFields}
              placeholder="Name (as shown on ID)"
              // value={username}
              onChangeText={text => setUsername(text)}
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional)"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </>
        )}
        {step === 3 && (
          <>
            <InputField
              style={styles.inputFields}
              placeholder="Name (as shown on ID)"
              // value={username}
              onChangeText={text => setUsername(text)}
            />
          </>
        )}
        {step === 4 && (
          <>
            <InputField
              style={styles.inputFields}
              placeholder="Name (as shown on ID)"
              // value={username}
              onChangeText={text => setUsername(text)}
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional)"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </>
        )}
        {step === 5 && (
          <>
            <InputField
              style={styles.inputFields}
              placeholder="Name (as shown on ID)"
              // value={username}
              onChangeText={text => setUsername(text)}
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <InputField
              style={styles.inputFields}
              placeholder="Email (Optional) Emergency Contact Person"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </>
        )}
        {/* Render Next button if not at the final step */}
      </View>
      <View style={styles.buttonContainer}>
        <BtnComp title="NEXT" onPress={handleNext} textStyle={styles.btnText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: scale(400),
    marginTop: scale(60),
    // Add consistent horizontal padding for better spacing
    // paddingHorizontal: 40,
    marginLeft: scale(70),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20, // Adjust margin as needed
    width: scale(400),
  },
  btnText: {
    fontSize: 17,
    color: colorStyle.whiteColor,
  },
  inputFields: {
    fontWeight: '300',
    fontSize: 18,
    marginBottom: 10, // Add margin bottom for input fields
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add consistent margin bottom
  },
});

export default StepOne;
