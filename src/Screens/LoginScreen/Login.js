import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BtnComp from '../../Compoment/ButtonComp/BtnComp';
import InputField from '../../Compoment/InputFieldComp/InputField';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =async () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    
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
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Delivery App </Text>
      <InputField
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <BtnComp title="LOGIN" onPress={handleLogin} />
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
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#003f5c',
    marginBottom: 40,
  },


});

export default LoginScreen;
