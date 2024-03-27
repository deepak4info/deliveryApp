import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colorStyle from '../../style/colorStyle'
import { moderateScaleVertical, scale } from '../../style/responsiveSize'

const HeaderComp = (
    {
        MainText
    }
) => {
  return (
    <View>
      <Text style={styles.MainText}>{MainText}</Text>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
MainText:{
    color:colorStyle.themeColor,
    fontSize:scale(26),
    fontWeight:'700',
    alignSelf:'center',
    marginVertical:moderateScaleVertical(10),
}
})