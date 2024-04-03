import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import ImagePath from '../../Constable/ImagePath';
import {scale} from '../../style/responsiveSize';
import colorStyle from '../../style/colorStyle';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: ImagePath.OnScreen1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: ImagePath.OnScreen2,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: ImagePath.OnScreen3,
    backgroundColor: '#22bcb5',
  },
];

const StepsScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef(null);

  const handleNextStep = () => {
    if (currentStep === slides.length - 1) {
      // Handle navigation or action for last step
    } else {
      setCurrentStep(currentStep + 1);
      flatListRef.current.scrollToIndex({index: currentStep + 1});
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep === 0 ? slides.length - 1 : currentStep - 1);
    flatListRef.current.scrollToIndex({
      index: currentStep === 0 ? slides.length - 1 : currentStep - 1,
    });
  };

  const handleSkip = () => {
    // Navigate to login screen
    navigation.replace('Login');
  };

  const handleDone = () => {
    // Handle action for last step (e.g., replace to home screen)
    navigation.replace('Login');
  };

  const renderDot = ({index}) => {
    return (
      <View style={[styles.dot, index === currentStep && styles.activeDot]} />
    );
  };

  const renderSlide = ({item}) => {
    return (
      <View
        style={[
          styles.slideContainer,
          {backgroundColor: item.backgroundColor},
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => renderDot({index}))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key.toString()}
        onScroll={event => {
          const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentStep(slideIndex);
        }}
      />
      <View style={styles.buttonContainer}>
        {currentStep === 0 ? (
          <TouchableOpacity
            onPress={handleSkip}
            style={{
              width: '50%',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D9D9D9',
            }}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handlePreviousStep}
            style={{
              width: '50%',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D9D9D9',
            }}>
            <Text style={styles.skipButton}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentStep !== slides.length - 1 && (
          <TouchableOpacity
            onPress={handleNextStep}
            style={{
              width: '50%',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',

              backgroundColor: colorStyle.themeColor,
            }}>
            <Text style={[styles.skipButton, {color: '#ffff'}]}>Next</Text>
          </TouchableOpacity>
        )}
        {currentStep === slides.length - 1 && (
          <TouchableOpacity
            onPress={handleDone}
            style={{
              width: '50%',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colorStyle.themeColor,
            }}>
            <Text style={[styles.skipButton, {color: '#ffff'}]}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    width: Dimensions.get('window').width, // Set slide width to screen width
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    height: scale(350),
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom:.2
    // paddingHorizontal: 20,
    // margin: 20,
  },
  skipButton: {
    fontSize: 16,
    color: '#525252',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Adjust this value as needed
    left: 0,
    right: 0,
  },
});

export default StepsScreen;
