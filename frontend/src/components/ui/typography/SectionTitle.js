import { StyleSheet, Text, View } from 'react-native'

export const SectionTitle = ({ children }) => {
   return (
      <View>
         <Text style={styles.sectionTitle}>{children}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   sectionTitle: {
      fontSize: 26,
      fontWeight: '600',
      color: '#222222'
   }
})