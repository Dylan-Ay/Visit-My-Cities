import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'

export const CustomBackButton = ({ onPress }) => {
   return (
      <Pressable style={styles.buttonContainer} onPress={onPress}>
         <Ionicons style={{ fontSize: 20 }} name="chevron-back-outline" />
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
      marginLeft: 16,
   },
})
