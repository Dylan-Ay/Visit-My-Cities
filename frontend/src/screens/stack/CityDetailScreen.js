//prettier-ignore
import { ContentContainer, HeroBanner, PlaceCard, ScreenWrapper, SearchInput, SectionTitle } from '../../components/ui'
import { FlatList } from 'react-native'
import { buildings, cities } from '../../services/data'

export const CityDetailScreen = ({ navigation, route }) => {
   const { cityId } = route.params
   const city = cities.find((cityItem) => cityItem.id == cityId)

   let cityBuildings = []
   buildings.forEach((buildingItem) => {
      if (buildingItem.cityId == cityId) {
         cityBuildings.push(buildingItem)
      }
   })

   return (
      <ScreenWrapper useEdges={false}>
         <FlatList
            data={cityBuildings}
            keyExtractor={(item) => item.id}
            numColumns={2}
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
                     onPress={() =>
                        navigation.navigate('BuildingDetail', {
                           buildingId: item.id,
                        })
                     }
                  />
               </ContentContainer>
            )}
            ListHeaderComponent={
               <>
                  <HeroBanner
                     title={city.name}
                     image={{ uri: city.image }}
                     style={{ fontSize: 34 }}
                  />
                  <ContentContainer>
                     <SearchInput placeholder="Rechercher un monument/bâtiment" />
                     <SectionTitle>Monuments et bâtiments</SectionTitle>
                  </ContentContainer>
               </>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
         />
      </ScreenWrapper>
   )
}
