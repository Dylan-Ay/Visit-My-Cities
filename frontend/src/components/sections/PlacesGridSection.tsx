//prettier-ignore
import { ContentContainer, HeroBanner, PlaceCard, SearchInput, SectionTitle } from '../ui'
import { FlatList, ImageSourcePropType, StyleProp, Text, ViewStyle } from 'react-native'

interface PlaceCardProperties {
   id: number
   image: string
   name: string
}

interface PlacesGridSectionProps<T> {
   data: T[]
   heroTitle: string
   heroImg: ImageSourcePropType
   searchInputPlaceHolder: string
   sectionTitle: string
   titleContainerStyle?: StyleProp<ViewStyle>
   onPressItem: (item: T) => void
}

export default function PlacesGridSection<T extends PlaceCardProperties>({
   data,
   heroTitle,
   heroImg,
   searchInputPlaceHolder,
   sectionTitle,
   titleContainerStyle,
   onPressItem,
}: PlacesGridSectionProps<T>) {
   return (
      <FlatList
         data={data}
         keyExtractor={(item) => String(item.id)}
         numColumns={2}
         ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 40}}>Aucun monument ou bâtiment n'a encore été enregistré pour "{heroTitle}".</Text>}
         renderItem={({ item }) => (
            <ContentContainer
               style={{
                  width: '50%',
                  paddingBottom: 16,
               }}
            >
               <PlaceCard
                  image={item.image}
                  name={item.name}
                  imgStyle={{ height: 150 }}
                  onPress={() => onPressItem(item)}
               />
            </ContentContainer>
         )}
         ListHeaderComponent={
            <>
               <HeroBanner title={heroTitle} image={heroImg} />
               <ContentContainer>
                  {data.length > 0 && (
                     <>
                        <SearchInput placeholder={searchInputPlaceHolder} />
                        <SectionTitle containerStyle={titleContainerStyle}>{sectionTitle}</SectionTitle>   
                     </>
                  )}
               </ContentContainer>
            </>
         }
         contentContainerStyle={{ paddingBottom: 20 }}
         showsVerticalScrollIndicator={false}
      />
   )
}
