import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
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

  const handleNextStep = useCallback(() => {
    if (currentStep === slides.length - 1) {
      // Handle navigation or action for last step
    } else {
      setCurrentStep(prevStep => prevStep + 1);
      flatListRef.current.scrollToIndex({index: currentStep + 1});
    }
  }, [currentStep]);

  const handlePreviousStep = useCallback(() => {
    setCurrentStep(prevStep =>
      prevStep === 0 ? slides.length - 1 : prevStep - 1,
    );
    flatListRef.current.scrollToIndex({
      index: currentStep === 0 ? slides.length - 1 : currentStep - 1,
    });
  }, [currentStep]);

  const handleSkip = useCallback(() => {
    // Navigate to login screen
    navigation.replace('Login');
  }, [navigation]);

  const handleDone = useCallback(() => {
    // Handle action for last step (e.g., replace to home screen)
    navigation.replace('Login');
  }, [navigation]);

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
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: slides[currentStep].backgroundColor},
      ]}>
        <StatusBar translucent backgroundColor={slides[currentStep].backgroundColor}/>
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentStep && styles.activeDot]}
          />
        ))}
      </View>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        contentContainerStyle={{backgroundColor:slides[currentStep].backgroundColor}}
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

      <View style={[styles.buttonContainer,{backgroundColor:slides[currentStep].backgroundColor}]}>
        {/* {currentStep === 0 ? ( */}
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
       
        {currentStep !== slides.length - 1 && (
          <TouchableOpacity
            onPress={handleNextStep}
            style={[styles.button, {backgroundColor: colorStyle.themeColor}]}>
            <Text style={[styles.buttonText, {color: '#ffff'}]}>Next</Text>
          </TouchableOpacity>
        )}
        {currentStep === slides.length - 1 && (
          <TouchableOpacity
            onPress={handleDone}
            style={[styles.button, ]}>
            <Text style={[styles.buttonText, {color: '#ffff'}]}>Done</Text>
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
    flex:1,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    // width: '30%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  buttonText: {
    fontSize: 16,
    color: '#525252',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap:10
    // borderWidth:1
    // marginBottom: 20, // Adjust spacing as needed
  },
  dot: {
    flex: 1,
    // width: 100,
    height: 4,
    borderRadius: 5,
    backgroundColor: 'gray',
    // marginHorizontal: 5,
   
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default StepsScreen;
