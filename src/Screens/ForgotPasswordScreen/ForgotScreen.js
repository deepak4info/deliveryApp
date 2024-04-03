import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../../Constable/ImagePath';
import InputField from '../../Compoment/InputFieldComp/InputField';
import BtnComp from '../../Compoment/ButtonComp/BtnComp';
import StatusBarComponent from '../../Compoment/StatusBarComponent';
import colorStyle from '../../style/colorStyle';
import LeftComponent from '../../Compoment/LeftComponent/LeftComponent';
import {scale} from '../../style/responsiveSize';
import fontFamily from '../../style/fontFamily';

const ForgotScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBarComponent />
      <LeftComponent onPress={()=>navigation.goBack()}/>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={colorStyle.whiteColor}
      />
      <View
        style={{
          flex: 1,
          //   borderWidth: 1,
          alignItems: 'center',
        }}>
        <Image source={ImagePath.ForgotPassword} style={styles.image} />
        <Text style={styles.title}>Forget Password</Text>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 18,
            fontWeight: '300',
          }}>
          You can reset your password here.
        </Text>
        <InputField
          placeholder="Mobile"
          // onChangeText={text => setUsername(text)}
          keyboardType={'number-pad'}
        />
        <BtnComp
          onPress={() => navigation.navigate('OTPscreen')}
          title="Reset Password"
          textStyle={styles.btnText1}
          style={[styles.button]}
        />
      </View>
    </View>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 118,
    height: 118,
    // top: 83,
    marginTop: scale(70), // There is no 'gap' property in React Native, using marginBottom instead
    // opacity: 0, // This sets the initial opacity of the image to 0
  },
  btnText1: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22.99,
    fontFamily: fontFamily.bold,
  },
  button: {
    width: '80%',
    padding: 2,
  },
  title: {
    fontSize: 30,
    color:colorStyle.blackColor,
    fontWeight: '500',
  },
});
