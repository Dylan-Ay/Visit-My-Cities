import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ScreenWrapperProps {
   children: React.ReactElement
   useEdges: boolean
}

export const ScreenWrapper = ({ children, useEdges = true }: ScreenWrapperProps) => {
   return (
      <SafeAreaView
         style={styles.container}
         edges={useEdges ? ['top', 'bottom', 'left', 'right'] : []}
      >
         {children}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
   },
})
