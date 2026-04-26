import { StyleSheet, View } from 'react-native'

interface CarouselItemProps {
   children: React.ReactElement
}

export const CarouselItem = ({ children }: CarouselItemProps) => {
   return <View style={styles.item}>{children}</View>
}

const styles = StyleSheet.create({
   item: {
      width: 130,
      marginRight: 16,
   },
})
