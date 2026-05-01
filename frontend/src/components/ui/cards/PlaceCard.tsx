import {
   StyleSheet,
   TouchableOpacity,
   Text,
   Image,
   StyleProp,
   ViewStyle,
   ImageStyle,
} from 'react-native'

interface PlaceCardProps {
   image: string
   name: string
   style?: StyleProp<ViewStyle>
   imgStyle?: StyleProp<ImageStyle>
   onPress: () => void
}

export const PlaceCard = ({ image, name, style, imgStyle, onPress }: PlaceCardProps) => {
   return (
      <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
         <Image source={{ uri: image }} style={[styles.image, imgStyle]} resizeMode="cover" />
         <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      width: '100%',
      borderRadius: 8,
   },

   image: {
      width: '100%',
      height: 120,
      borderRadius: 8,
   },

   name: {
      paddingTop: 4,
      textAlign: 'center',
      fontSize: 16,
   },
})
