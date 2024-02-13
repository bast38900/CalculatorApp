import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Keyboard } from '../components/keyboard'
import { sharedStyles } from '../assets/shared.styles'

type Props = {}

/**
 * Calculator screen component.
 */
export const CalculatorScreen = (props: Props) => {
  return (
    <View style={sharedStyles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'flex-end'}}>
        <Text style={{color: "white", fontSize: 42, fontWeight: 'bold' , alignSelf: 'center'}}>Calculator</Text>
      </View>
      <View style={{flex: 3}}>
        <Keyboard/>
      </View>
    </View>
  )
}
