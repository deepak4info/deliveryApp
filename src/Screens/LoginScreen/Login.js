import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import BtnComp from '../../Compoment/ButtonComp/BtnComp';
import InputField from '../../Compoment/InputFieldComp/InputField';
import ImagePath from '../../Constable/ImagePath';
import {scale} from '../../style/responsiveSize';
import colorStyle from '../../style/colorStyle';
import LeftComponent from '../../Compoment/LeftComponent/LeftComponent';
import StatusBarComponent from '../../Compoment/StatusBarComponent';
import axios from 'axios';
import Api, {login} from '../../utill/Api';
import {setItem, getItem} from '../../utill/DataStore/LocalDataStore';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      console.log('Login successful. Received data:', data.token);
      const token = data.token;

      const StoreToken = await setItem('store_token', token);
      const getStoreToken = await getItem('store_token');

      console.log('gt Store token:******', getStoreToken);

      data ? navigation.replace('Drawer') : Alert.alert('Login Failed');
    } catch (error) {
      console.error('Login failed:', error);
    }
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
      <Image source={ImagePath.LoginScreen} style={styles.image} />

      <InputField
        placeholder="Mobile"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.passwordContainer}>
        <TouchableOpacity
          style={styles.forgotPasswordLink}
          onPress={handleForgot}>
          <Text style={styles.signupText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <BtnComp
        title="LOGIN"
        onPress={handleLogin}
        textStyle={styles.btnText1}
      />
      <BtnComp
        title="REGISTER"
        onPress={handleRegister}
        style={styles.customBtn}
        textStyle={styles.btnText}
      />
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
  image: {
    width: 375,
    height: 249.8,

    marginBottom: 40, // There is no 'gap' property in React Native, using marginBottom instead
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#003f5c',
    marginBottom: 40,
  },
  customBtn: {
    // Custom styles for the button
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colorStyle.themeColor,
  },
  btnText1: {
    fontSize: 17,
  },
  btnText: {
    color: colorStyle.themeColor,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  forgotPasswordLink: {
    position: 'absolute',
    bottom: -20,
    right: 40,
    marginVertical: 20,
  },
  signupText: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default LoginScreen;
