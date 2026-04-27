import { View } from 'react-native'
import { StyleSheet } from 'react-native'

interface TwoColumnsProps {
   children: React.ReactElement[]
}

export const TwoColumns = ({ children }: TwoColumnsProps) => {
   return (
      <View>
         <View style={styles.container}>{children}</View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
})
