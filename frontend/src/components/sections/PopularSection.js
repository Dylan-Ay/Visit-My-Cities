import { View } from 'react-native'
import { SectionTitle, PlacesCarousel } from '../ui'

export default function PopularSection({ title, data, renderItem }) {
   return (
      <View>
         <SectionTitle>{title}</SectionTitle>

         <PlacesCarousel
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
         />
      </View>
   )
}
