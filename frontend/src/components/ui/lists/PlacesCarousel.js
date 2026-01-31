import { FlatList } from 'react-native'

export const PlacesCarousel = ({ data, renderItem, keyExtractor }) => {
   return (
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={data}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
      />
   )
}
