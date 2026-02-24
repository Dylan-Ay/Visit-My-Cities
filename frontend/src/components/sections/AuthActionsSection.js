import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ActionButton } from '../ui'

export default function AuthActionsSection({
   primaryTitle,
   primaryOnPress,
   secondaryTitle,
   secondaryOnPress,
}) {
   return (
      <View style={styles.inputsContainer}>
         <ActionButton
            title={primaryTitle}
            containerStyle={styles.loginInput}
            textStyle={styles.textInput}
            onPress={primaryOnPress}
         />

         <TouchableOpacity onPress={secondaryOnPress}>
            <Text style={styles.textInput}>{secondaryTitle}</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   inputsContainer: {
      width: '100%',
      alignItems: 'center',
      gap: 40,
   },
   loginInput: {
      backgroundColor: '#3853d9',
      width: '100%',
      padding: 14,
   },
   textInput: {
      fontSize: 16,
      fontWeight: 500,
   },
})
