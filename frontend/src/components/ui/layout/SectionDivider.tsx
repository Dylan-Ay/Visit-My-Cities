import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface SectionDividerProps {
   style: StyleProp<ViewStyle>
}

export const SectionDivider = ({ style }: SectionDividerProps) => {
   return <View style={[styles.container, style]}></View>
}

const styles = StyleSheet.create({
   container: {
      borderWidth: 0.6,
      borderColor: '#dedede',
      flex: 1,
      marginTop: 28,
   },
})
