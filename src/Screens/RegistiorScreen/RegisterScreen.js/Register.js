import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient'; // or 'react-native-linear-gradient'

const OnboardingScreen = ({ navigation }) => {
  return (
    <LinearGradient 
        colors={['#1E2022', '#F2C94C']} 
        style={styles.container}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
    > 
      <Image
        source={require('../../../assets/images/map.png')} 
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Request Ride</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}> 
          <Text style={styles.subtitle}>Schedule a trip</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
          style={styles.arrowButton}
          onPress={() => navigation.navigate('NextScreen')} 
      >
        <Text style={styles.arrow}>&gt;</Text> 
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250, // Adjust as needed
    height: 250,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1E2022',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 30,
    color: 'white',
  },
});

export default OnboardingScreen;


