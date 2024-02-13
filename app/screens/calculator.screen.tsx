import React from 'react'
import { Text } from 'react-native'
import { Button } from '../components/button'
import { Colors } from '../assets'

type Props = {}

export const CalculatorScreen = (props: Props) => {
  return (
    <>
      <Text style={{color: "white", fontSize: 22}}>Calculator Screen</Text>
      <Button title='+' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
    </>
  )
}