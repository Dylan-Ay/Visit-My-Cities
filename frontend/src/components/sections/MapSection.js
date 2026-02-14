import { View } from 'react-native'
import { MapViewCustom, SectionTitle } from '../ui'

export default function MapSection() {
   const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
   }

   return (
      <View>
         <SectionTitle style={{ fontSize: 22 }}>S'y rendre</SectionTitle>
         <MapViewCustom region={region} />
      </View>
   )
}
