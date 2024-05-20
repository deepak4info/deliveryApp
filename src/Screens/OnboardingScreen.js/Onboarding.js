// Onboarding.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import SvgComponent from '../../Compoment/SvgComponent/SvgComponent';
import OnboardingSection from './OnboardingSection';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      imageSource: require('../../assets/svg/ii.png'),
      top: 180,
      left: 80,
      text1: 'Request',
      text2: 'Ride',
      text3: 'Schedule a trip',
    },
    {
      imageSource: require('../../assets/svg/Page.png'),
      top: 180,
      left: 80,
      text1: 'Book',
      text2: 'Now',
      text3: 'Instant booking',
    },
    {
      imageSource: require('../../assets/svg/op.png'),
      top: 180,
      left: 80,
      text1: 'Plan',
      text2: 'Ahead',
      text3: 'Future trips',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    if(currentIndex ===2 ){
      navigation.replace('Login')
    }
  };

  const currentData = data[currentIndex];

  return (
    <ImageBackground
      source={require('../../assets/svg/mapOne.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.svgContainer}>
        <SvgComponent />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Image
          source={require('../../assets/svg/right.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      <StatusBar translucent backgroundColor={'#3b454c'} />

      <OnboardingSection
        imageSource={currentData.imageSource}
        top={currentData.top}
        left={currentData.left}
        text1={currentData.text1}
        text2={currentData.text2}
        text3={currentData.text3}
        currentIndex={currentIndex} // Pass currentIndex here
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  svgContainer: {
    // Add styling for the SVG container if needed
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#FFBC07',
    borderRadius: 50,
    position: 'absolute',
    bottom: 200,
    right: 20,
    shadowColor: 'rgba(0, 0, 2, 1.25)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 26.17,
    height: 26.17,
  },
});

export default Onboarding;
