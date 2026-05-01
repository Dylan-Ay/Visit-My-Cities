import { FlatList, ListRenderItem } from 'react-native'

interface PlacesCarouselProps<T> {
   data: T[]
   renderItem: ListRenderItem<T>
   keyExtractor: (item: T, index: number) => string
   emptyComponent?: React.ReactElement
   scrollEnabled?: boolean
}

export const PlacesCarousel = <T,>({
   data,
   renderItem,
   keyExtractor,
   emptyComponent,
   scrollEnabled,
}: PlacesCarouselProps<T>) => {
   return (
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={data}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
         ListEmptyComponent={emptyComponent}
         scrollEnabled={scrollEnabled}
      />
   )
}
