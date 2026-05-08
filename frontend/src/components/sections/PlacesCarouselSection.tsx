import { ListRenderItem, StyleProp, TextProps, View } from 'react-native'
import { SectionTitle, PlacesCarousel } from '../ui'
import { ReactElement } from 'react'

interface HasId {
   id: number
}

interface PlacesCarouselSectionProps<T> {
   data: T[]
   title: string
   titleStyle?: StyleProp<TextProps>
   renderItem: ListRenderItem<T>
   emptyComponent?: ReactElement
   scrollEnabled?: boolean
}

export default function PlacesCarouselSection<T extends HasId>({
   data,
   title,
   titleStyle,
   renderItem,
   emptyComponent,
   scrollEnabled,
}: PlacesCarouselSectionProps<T>) {
   return (
      <View>
         <SectionTitle style={titleStyle}>{title}</SectionTitle>

         <PlacesCarousel
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            emptyComponent={emptyComponent}
            scrollEnabled={scrollEnabled}
         />
      </View>
   )
}
