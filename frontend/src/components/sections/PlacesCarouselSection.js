import { View } from 'react-native'
import { SectionTitle, PlacesCarousel } from '../ui'

export default function PlacesCarouselSection({
   title,
   titleStyle,
   data,
   renderItem,
}) {
   return (
      <View>
         <SectionTitle style={titleStyle}>{title}</SectionTitle>

         <PlacesCarousel
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
         />
      </View>
   )
}
