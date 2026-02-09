import { StyleSheet, View } from 'react-native'

export const SectionDivider = () => {
   return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
   container: {
      borderWidth: 0.6,
      borderColor: '#dedede',
      flex: 1,
      marginTop: 28,
   },
})
