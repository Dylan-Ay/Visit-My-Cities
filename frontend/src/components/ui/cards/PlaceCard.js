import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

const PlaceCard = ({ image, name }) => {
   return (
      <TouchableOpacity style={styles.card}>
         <Image source={{ uri: image }} style={styles.image} />
         <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
   )
}

export const CityCard = ({ city }) => (
   <PlaceCard image={city.image} name={city.name} />
)

export const BuildingCard = ({ building }) => (
   <PlaceCard image={building.image} name={building.name} />
)

const styles = StyleSheet.create({
   card: {
      width: 130,
      marginRight: 16,
      borderRadius: 8,
      overflow: 'hidden',
   },

   image: {
      width: '100%',
      height: 130,
   },

   name: {
      marginTop: 4,
      textAlign: 'center',
      fontSize: 16,
   },
})
