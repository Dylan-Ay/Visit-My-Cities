import {
   StyleProp,
   StyleSheet,
   Text,
   TextStyle,
   View,
   ViewStyle,
} from 'react-native'

interface SectionTitleProps {
   children: React.ReactNode
   containerStyle?: StyleProp<ViewStyle>
   style?: StyleProp<TextStyle>
   right?: React.ReactNode
}

export const SectionTitle = ({
   children,
   containerStyle,
   style,
   right,
}: SectionTitleProps) => {
   return (
      <View style={[styles.container, containerStyle]}>
         <Text style={[styles.sectionTitle, style]}>{children}</Text>
         {right}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 12,
   },
   sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#222222',
   },
})
