import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

export const PlaceCard = ({ image, name, style }) => {
   return (
      <TouchableOpacity style={[styles.card, style]}>
         <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
         />
         <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      width: '100%',
      borderRadius: 8,
      overflow: 'hidden',
   },

   image: {
      width: '100%',
      height: 130,
   },

   name: {
      paddingTop: 4,
      textAlign: 'center',
      fontSize: 16,
   },
})
