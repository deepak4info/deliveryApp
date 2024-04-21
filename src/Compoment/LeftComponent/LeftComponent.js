import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import ImagePath from '../../Constable/ImagePath'
import { scale } from '../../style/responsiveSize'
import StatusBarComponent from '../StatusBarComponent'

const LeftComponent = ({onPress}) => {
  return (
    <View style={styles.midContainer}>
        <StatusBarComponent/>
    <TouchableHighlight onPress={onPress}
      style={{
        backgroundColor: '#fafafa',
        borderRadius: 20,
        justifyContent: 'center',
        height: 40,
        width: 40,
        alignItems: 'center',
      }}>
      <Image
        source={ImagePath.ArrowLeft}
        style={{
          width: scale(27),
          height: scale(27),
        }}
      />
    </TouchableHighlight>
  </View>
  )
}

export default LeftComponent

const styles = StyleSheet.create({
    midContainer: {
        backgroundColor: '#fafafa',
        // flex: .1,
        borderRadius:20,
        height: 40,
        width: 40,
        position: 'absolute',
        top: Platform.OS === 'ios' ? 55 : 16,
        left: 25,
        right: 25,
        height: 40,
        // padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
      },
})