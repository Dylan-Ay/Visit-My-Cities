import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ActionButton } from '../ui'

interface ActionsSectionsProps {
   primaryTitle: string
   secondaryTitle?: string
   primaryOnPress: () => void
   secondaryOnPress?: () => void
   containerStyle?: StyleProp<ViewStyle>
}

export default function ActionsSections({
   primaryTitle,
   secondaryTitle,
   primaryOnPress,
   secondaryOnPress,
   containerStyle,
}: ActionsSectionsProps) {
   return (
      <View style={[styles.inputsContainer, containerStyle]}>
         <ActionButton
            title={primaryTitle}
            containerStyle={styles.primaryContainer}
            textStyle={styles.primaryText}
            onPress={primaryOnPress}
         />
         {secondaryTitle && secondaryOnPress && (
            <TouchableOpacity onPress={secondaryOnPress}>
               <Text style={styles.secondaryText}>{secondaryTitle}</Text>
            </TouchableOpacity>
         )}
      </View>
   )
}

const styles = StyleSheet.create({
   inputsContainer: {
      width: '100%',
      alignItems: 'center',
      gap: 14,
   },
   primaryContainer: {
      backgroundColor: '#3853d9',
      width: '100%',
      padding: 14,
   },
   primaryText: {
      fontSize: 16,
      fontWeight: 500,
   },
   secondaryText: {
      fontSize: 16,
      fontWeight: 500,
      padding: 20,
   },
})
