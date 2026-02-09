import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ExpandableText = ({ text, onPress }) => {
   const [isNumberOfLines, setNumberOfLines] = useState()

   return (
      <View>
         <Text numberOfLines={4} ellipsizeMode="tail">
            {text}
         </Text>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={onPress}>
               Voir plus
            </Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   button: {
      marginTop: 10,
   },
   textButton: {
      fontSize: 16,
      fontWeight: 600,
   },
})
