import { StyleSheet, View } from "react-native";
import { Button } from "./button";
import { Colors } from "../assets/colors";
import { sharedStyles } from "../assets/shared.styles";

type Props = {}

/**
 * Keyboard component.
 */
export const Keyboard = (props: Props) => {
  return (
    <View style={sharedStyles.container}>
      <View style={styles.rowContainer}>
        <Button title='7' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='8' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='9' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='÷' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='4' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='5' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='6' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='x' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='1' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='2' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='3' style={{backgroundColor: Colors.white}} textStyle={{color: Colors.black}}/>
        <Button title='-' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='0' style={{backgroundColor: Colors.white, flex: 3}} textStyle={{color: Colors.black}}/>
        <Button title='+' style={{backgroundColor: Colors.orange}} textStyle={{color: Colors.white}}/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='C' style={{backgroundColor: Colors.grey}} textStyle={{color: Colors.white}}/>
        <Button title='=' style={{backgroundColor: Colors.orange, flex: 3}} textStyle={{color: Colors.white}}/>
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