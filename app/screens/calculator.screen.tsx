import React from 'react'
import { View } from 'react-native'
import { Keyboard } from '../components/keyboard'
import { sharedStyles } from '../assets/shared.styles'

/**
 * Calculator screen component.
 */
export const CalculatorScreen = () => {
  return (
    <View style={sharedStyles.container}>
        <Keyboard/>
    </View>
  )
}
