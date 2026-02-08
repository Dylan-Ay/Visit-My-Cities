import { StyleSheet, Text, View } from 'react-native'

export const SectionTitle = ({ children, style }) => {
   return (
      <View>
         <Text style={[styles.sectionTitle, style]}>{children}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#222222',
      paddingTop: 20,
      paddingBottom: 12,
   },
})
