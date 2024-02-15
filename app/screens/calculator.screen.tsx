import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Keyboard } from '../components/calculator'
import { sharedStyles } from '../assets/shared.styles'

type Props = {}

/**
 * Calculator screen component.
 */
export const CalculatorScreen = (props: Props) => {
  return (
    <View style={sharedStyles.container}>
        <Keyboard/>
    </View>
  )
}
