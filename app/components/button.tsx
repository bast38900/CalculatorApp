import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Button = (props: Props) => {
  const { style, textStyle, onPress, title } = props;
  return (
    <View style={[styles.button , style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
},
title: {
    textAlign: 'center',
},
})