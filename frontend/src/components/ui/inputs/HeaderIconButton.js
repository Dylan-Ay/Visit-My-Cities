import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'

export const HeaderIconButton = ({ icon, onPress, style }) => {
   return (
      <Pressable style={[styles.buttonContainer, style]} onPress={onPress}>
         <Ionicons style={{ fontSize: 20 }} name={icon} />
      </Pressable>
   )
}

const styles = StyleSheet.create({
   buttonContainer: {
      backgroundColor: 'white',
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
   },
})
