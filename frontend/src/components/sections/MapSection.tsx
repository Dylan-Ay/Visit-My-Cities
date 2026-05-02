import { View } from 'react-native'
import { MapViewCustom, SectionTitle } from '../ui'
import { Coords } from '../../types/building'

interface MapSectionProps {
   name: string
   address: string
   region: Coords
}

export default function MapSection({ name, address, region }: MapSectionProps) {
   return (
      <View>
         <SectionTitle style={{ fontSize: 22 }}>S'y rendre</SectionTitle>
         <MapViewCustom name={name} address={address} region={region} />
      </View>
   )
}
