import { StyleSheet, Text, View } from "react-native";
import { Button } from "./button";
import { Colors } from "../assets/colors";
import { sharedStyles } from "../assets/shared.styles";
import { useState } from "react";
import {add, subtract, multiply, divide } from '../utils/calculate';

type Props = {}

/**
 * Keyboard component.
 */
export const Keyboard = (props: Props) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [OperatorValue, setOperator] = useState('');
  const [calculatedPercentage, setCalculatedPercentage] = useState('');


  /**
   * Function to handle if numbers (0 - 9) are pressed.
   */
  const numberPressed = (number: string) => {
    setDisplayValue(displayValue === '0' ? number : displayValue + number)
  }

  /**
   * Function to handle if operators ('+', '-', 'x', '÷') are pressed.
   */
  const operatorPressed = (OperatorValue: string) => {
    setFirstValue(displayValue)
    setDisplayValue('0')
    setOperator(OperatorValue)
  }

  /**
   * Function to handle if equal ('=') are pressed.
   */
  const equalPressed = () => {
    if (calculatedPercentage) {
      setDisplayValue(calculatedPercentage)
      setCalculatedPercentage('')
    }
    else {
      const a = parseFloat(firstValue)
      const b = parseFloat(displayValue)
      let result = ('0');
  
      switch (OperatorValue) {
        case "+":
          result = add(a, b).toString()
          break;
        case "-":
          result = subtract(a, b).toString()
          break;
        case "x":
          result = multiply(a, b).toString()
          break;
        case "÷":
          result = divide(a, b).toString()
          break;
        default:
          return result;
      }
  
      setDisplayValue(result)
    }
  }

  /**
   * Function to handle if percentage ('%') are pressed.
   */
  const percentagePressed = () => {
    const number = parseFloat(firstValue)
    const percentage = parseFloat(displayValue) * 0.01
    let result = ('0');

    switch (OperatorValue) {
      case "+":
        result = (number + (number * (percentage))).toString()
        break;
      case "-":
        result = (number -(number * (percentage))).toString()
        break;
      case "x":
        result = (number * (percentage)).toString()
        break;
      case "÷":
        result = (number / (number * (percentage))).toString()
        break;
      default:
        return result;
    }

    setCalculatedPercentage(calculatedPercentage + result)
  }
  
  /**
   * Function to handle if clear ('C') are pressed.
   */
  const clearPressed = () => {
    setDisplayValue('0')
    setFirstValue('')
    setOperator('')
    setCalculatedPercentage('')
  }

  return (
    <View style={sharedStyles.container}>
      <View style={{flex: 2, justifyContent: 'center', alignSelf: 'flex-end'}}>
        <Text style={{color: "white", fontSize: 72, fontWeight: 'bold' , alignSelf: 'center'}}>{displayValue}</Text>
      </View>
      <View style={styles.rowContainer}>
      <Button title='%' style={{backgroundColor: Colors.orange, flex: 1}} textStyle={{color: Colors.white}} onPress={() => percentagePressed()}/>
      <Button title='%' style={{backgroundColor: Colors.orange, flex: 1}} textStyle={{color: Colors.white}} onPress={() => percentagePressed()}/>
      <Button title='%' style={{backgroundColor: Colors.orange, flex: 1}} textStyle={{color: Colors.white}} onPress={() => percentagePressed()}/>
      <Button title='' style={{backgroundColor: Colors.orange, flex: 1}} textStyle={{color: Colors.white}}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='7' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("7")}/>
        <Button title='8' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("8")}/>
        <Button title='9' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("9")}/>
        <Button title='÷' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}} onPress={() => operatorPressed("÷")}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='4' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("4")}/>
        <Button title='5' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("5")}/>
        <Button title='6' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("6")}/>
        <Button title='x' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}} onPress={() => operatorPressed("x")}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='1' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("1")}/>
        <Button title='2' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("2")}/>
        <Button title='3' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}} onPress={() => numberPressed("3")}/>
        <Button title='-' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}} onPress={() => operatorPressed("-")}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='0' style={{backgroundColor: Colors.white, flex: 3}} textStyle={{color: Colors.black}} onPress={() => numberPressed("0")}/>
        <Button title='+' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}} onPress={() => operatorPressed("+")}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='C' style={{backgroundColor: Colors.grey}} textStyle={{color: Colors.white}} onPress={() => clearPressed()}/>
        <Button title='=' style={{backgroundColor: Colors.orange, flex: 3}} textStyle={{color: Colors.white}} onPress={() => equalPressed()}/>
      </View>
    </View>
  )
}

/**
 * Styles for the calculator screen.
 */
const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})