import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colorStyle from '../../style/colorStyle'
import { moderateScale, moderateScaleVertical, scale } from '../../style/responsiveSize'
import ImagePath from '../../Constable/ImagePath'

const HeaderComp = (
  {
    MainText,
    LeftImage,
    RightImage,
  }
) => {
  return (
    <View style={styles.Container}>
      {LeftImage ? <Image source={ImagePath.Menu} style={{ width: 30, height: 30 }} /> : null}
      <Text style={styles.MainText}>{MainText}</Text>
      {RightImage ? <Image source={ImagePath.AlertIcon} style={{ width: 30, height: 30 }} /> : null}
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
  Container: {
    flex: 0.06, flexDirection: 'row', justifyContent: 'space-between', padding: scale(10),
  },
  MainText: {
    color: colorStyle.themeColor,
    fontSize: scale(26),
    fontWeight: '700',
  }
})