import React,{useEffect} from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import ImagePath from '../../Constable/ImagePath';
import { scale } from '../../style/responsiveSize';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000); 


    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={ImagePath.SplashBg}
        resizeMode='cover'>
        <Image
          source={ImagePath.SplashLogo}
          style={styles.splashLogo}
          resizeMode='contain'
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: '100%',
    height: scale(150), // Assuming you're using a responsive size utility function
  },
});

export default Splash;
