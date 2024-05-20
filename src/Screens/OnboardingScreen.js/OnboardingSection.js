// OnboardingSection.js
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const OnboardingSection = ({ imageSource, top, left, text1, text2, text3, currentIndex }) => {
    const getImageDimensions = () => {
        if (currentIndex === 1) return { width: 251, height: 250 };
        if (currentIndex === 2) return { width: 193, height: 112 };
        return { width: 235.37, height: 266 };
      };
    
      const { width, height } = getImageDimensions();
  return (
    <View style={[styles.imageOverlay, { top, left }]}>
      <Image
        source={imageSource}
        style={[styles.overlayImage, { width, height}]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.requestText}>{text1}</Text>
        <Text style={styles.rideText}>{text2}</Text>
        <Text style={styles.scheduleText}>{text3}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
  },
  overlayImage: {
    height: 266,
  },
  textContainer: {
    width: 180,
    height: 185,
    position: 'absolute',
    top: 300,
    left: -60,
  },
  requestText: {
    fontSize: 40,
    color: '#FFBC07',
    fontWeight: 'bold',
  },
  rideText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  scheduleText: {
    fontSize: 14,
    color: '#C1B9B9',
    fontWeight: 'bold',
  },
});

export default OnboardingSection;
