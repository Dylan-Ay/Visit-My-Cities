import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface ContentContainerProps {
   children: React.ReactElement
   style: StyleProp<ViewStyle>
}

export const ContentContainer = ({ children, style }: ContentContainerProps) => (
   <View style={[styles.container, style]}>{children}</View>
)

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 16,
   },
})
