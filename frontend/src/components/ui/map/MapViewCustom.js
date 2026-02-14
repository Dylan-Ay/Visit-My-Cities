import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

export const MapViewCustom = ({ region }) => {
   return (
      <View style={styles.container}>
         <MapView style={styles.map} region={region} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingVertical: 10,
   },
   map: {
      height: 200,
   },
})
