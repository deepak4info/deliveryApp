import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImagePath from '../../../Constable/ImagePath';
import InputField from '../../../Compoment/InputFieldComp/InputField';
import BtnComp from '../../../Compoment/ButtonComp/BtnComp';
import {scale} from '../../../style/responsiveSize';
import LeftComponent from '../../../Compoment/LeftComponent/LeftComponent';
import colorStyle from '../../../style/colorStyle';
import {Picker} from '@react-native-picker/picker';
const Register = ({navigation}) => {
  const [mobile, setmobile] = useState('');
  const [password, setPassword] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const vehicles = [
    {label: 'Car', value: 'car'},
    {label: 'Truck', value: 'truck'},
    {label: 'Motorcycle', value: 'motorcycle'},
    // Add more vehicle options as needed
  ];
  const handleGetStarted = async () => {
    // Implement your login logic here
    navigation.navigate('StepOne')
    console.log('mobile:', mobile);
    // console.log('Password:', password);

    // try {
    //   // Make a POST request to your login API endpoint
    //   const response = await axios.post('YOUR_API_LOGIN_ENDPOINT', {
    //     mobile,
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
  return (
    <View style={styles.container}>
      <Image source={ImagePath.LoginScreen} style={styles.image} />
      <LeftComponent onPress={() => navigation.goBack()} />
      <View
        style={{
          // borderWidth:1,
          width: '80%',
          alignSelf: 'center',
          marginVertical: scale(5),
        }}>
        <Text
          style={{
            fontSize: scale(26),
            fontWeight: '600',
            color: colorStyle.blackColor,
          }}>
          Become a driver
        </Text>
      </View>
      <InputField
        placeholder="Mobile"
        value={mobile}
        onChangeText={text => setmobile(text)}
        keyboardType={'number-pad'}
      />
      <View style={styles.quantityContainer}>
        <Picker
          style={styles.vehiclePicker}
          prompt="city you'll drive in"
          selectedValue={selectedVehicle}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedVehicle(itemValue)
          }>
          {vehicles.map((vehicle, index) => (
            <Picker.Item
              key={index}
              label={vehicle.label}
              value={vehicle.value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.quantityContainer}>
        <Picker
          style={styles.vehiclePicker}
          prompt="city you'll drive in"
          selectedValue={selectedVehicle}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedVehicle(itemValue)
          }>
          {vehicles.map((vehicle, index) => (
            <Picker.Item
              key={index}
              label={vehicle.label}
              value={vehicle.value}
            />
          ))}
        </Picker>
      </View>
      {/* <InputField
        placeholder="city you'll drive in"
        value={password}
        onChangeText={text => setPassword(text)}
      /> */}
      {/* <InputField
        placeholder="Vehicle type"
        value={password}
        onChangeText={text => setPassword(text)}
      /> */}

      <Text>We'll text you to confirm your number</Text>
      <BtnComp
        title="Get Started"
        onPress={handleGetStarted}
        textStyle={styles.btnText1}
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
    height: 244,
    // top: 83,
    // marginTop: , // There is no 'gap' property in React Native, using marginBottom instead
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
    borderColor: '#E86B50',
  },
  btnText1: {
    fontSize: 21,
    fontWeight: '600',
  },
  btnText: {
    color: '#E86B50',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  quantityPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    justifyContent: 'space-around',
    width: '30%',
    height: '70%',
    marginLeft: 10,
  },
  quantityPicker: {
    width: '100%',
    height: '100%',
    color: 'black',
  },
  selectedQuantity: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    color: 'black',
  },
  pickerItem: {
    height: 40,
  },
  quantityContainer: {
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
  vehiclePicker: {
    width: "80%",
    height: 50,
    
  },
});

export default Register;
