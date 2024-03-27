import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colorStyle from '../../style/colorStyle'
import HeaderComp from '../../Compoment/HeaderComp/HeaderComp'
import AppIntroSlider from 'react-native-app-intro-slider';
import { moderateScale, scale } from '../../style/responsiveSize';
import ImagePath from '../../Constable/ImagePath';
import { useNavigation } from '@react-navigation/native';
import slides from './DataSilder';


const Onboarding = () => {
 const navigation =useNavigation();

 // button label start
  const buttonLabel =(label)=>{
    return(
      <TouchableOpacity style={{width:'100%', backgroundColor:colorStyle.themeColor, borderRadius:scale(10)}}>
        <Text style={{
          color:colorStyle.blackColor,
          fontWeight:'600',
          fontSize:scale(20),
          padding:scale(15)
        }}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
// button label end


  return (
    <View style={styles.Container}>
      <HeaderComp 
      MainText={'Delivery App'}
      />
      
      <View style={{flex:1, backgroundColor:'white'}}>
        <AppIntroSlider
        data={slides}
        renderItem={({item})=>{
          return(
            <View style={{
              flex:1,
            alignItems:'center'
            }}>
              <Image
              source={item.image}
              style={{
                width:'80%',
                height:scale(350),
              }}
              resizeMode='contain'
              />
              <Text style={{fontSize:scale(30),
              fontWeight:'800',
              color:colorStyle.blackColor
              }}> 
                {item.title}
              </Text>
              <Text style={{fontSize:scale(18),
              fontWeight:'400',
              color:colorStyle.blackColor
              }}> 
                {item.text}
              </Text>
              </View>
          )
        }}
        activeDotStyle={{
          backgroundColor:colorStyle.themeColor,
          width:20,
        }}
        showSkipButton
        renderNextButton={()=>buttonLabel("Next")}
        renderSkipButton={()=>buttonLabel('Skip')}
        renderDoneButton={()=>buttonLabel('Done')}
        onDone={()=> navigation.navigate('Login')}
        onSkip={()=> navigation.navigate('Login')}
        />

      </View>
      
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:colorStyle.whiteColorOpacity50,
  }
})