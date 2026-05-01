import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

interface ActionButtonProps {
   title: string
   containerStyle?: StyleProp<ViewStyle>
   textStyle?: StyleProp<TextStyle>
   onPress: () => void
}

export const ActionButton = ({ title, containerStyle, textStyle, onPress }: ActionButtonProps) => {
   return (
      <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
         <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgb(80, 79, 79)',
      padding: 10,
      borderRadius: 30,
      alignItems: 'center',
      width: 200,
      marginTop: 10,
   },
   text: {
      color: 'white',
      fontWeight: 600,
   },
})
