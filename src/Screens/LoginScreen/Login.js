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
} from 'react-native';
import BtnComp from '../../Compoment/ButtonComp/BtnComp';
import InputField from '../../Compoment/InputFieldComp/InputField';
import ImagePath from '../../Constable/ImagePath';
import {scale} from '../../style/responsiveSize';
import colorStyle from '../../style/colorStyle';
import LeftComponent from '../../Compoment/LeftComponent/LeftComponent';
import StatusBarComponent from '../../Compoment/StatusBarComponent';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    navigation.replace('Home')

    // try {
    //   // Make a POST request to your login API endpoint
    //   const response = await axios.post('YOUR_API_LOGIN_ENDPOINT', {
    //     username,
    //     password,
    //   });

    //   // Assuming your API returns a token upon successful login
    //   const token = response.data.token;
    //   // You can store the token in AsyncStorage or Redux for further use

    //   // Handle successful login, e.g., navigate to the next screen
    //   console.log('Login successful! Token:', token);
    // } catch (error) {
    //   // Handle errors, e.g., display an error message
    //   console.error('Login failed:', error.message);
    //   Alert.alert('Error', 'Login failed. Please check your credentials.');
    // }
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
         {/* <StatusBar backgroundColor={colorStyle.themeColor} /> */}
         <StatusBarComponent/>
      <Image source={ImagePath.LoginScreen} style={styles.image} />
     <LeftComponent/>
      <InputField
        placeholder="Mobile"
        value={username}
        onChangeText={text => setUsername(text)}
        keyboardType={'number-pad'}
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
    // top: 83,
    marginBottom: 40, // There is no 'gap' property in React Native, using marginBottom instead
    // opacity: 0, // This sets the initial opacity of the image to 0
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
