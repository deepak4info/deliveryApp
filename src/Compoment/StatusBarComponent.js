import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colorStyle from '../style/colorStyle'

const StatusBarComponent = ({barStyle , backgroundColor, }) => {
  return (
   <StatusBar  barStyle={'dark-content'} backgroundColor={backgroundColor} />
  )
}

export default StatusBarComponent

const styles = StyleSheet.create({})