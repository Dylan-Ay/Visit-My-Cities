import { ScrollView } from 'react-native'
import PlacesCarouselSection from '../../components/sections/PlacesCarouselSection'
import {
   ScreenWrapper,
   SectionTitle,
   PlaceCard,
   ContentContainer,
   SectionDivider,
} from '../../components/ui'
import { CarouselItem } from '../../components/ui/layout/CarouselItem'
import { EmptyState } from '../../components/ui/EmptyState'
import { useFavorite } from '../../store/favoritesStore'
import { buildings, cities } from '../../services/data'
import { getPlacesByIds } from '../../utils/utils'

export const VisitScreen = ({ navigation }) => {
   // prettier-ignore
   const buildingsFavIds = useFavorite((state) => state.favoritesBuildings) ?? []
   const citiesFavIds = useFavorite((state) => state.favoriteCities) ?? []

   const citiesFav = getPlacesByIds(citiesFavIds, cities)
   const buildingsFav = getPlacesByIds(buildingsFavIds, buildings)

   return (
      <ScreenWrapper>
         <ScrollView showsVerticalScrollIndicator={false}>
            <ContentContainer>
               <SectionTitle
                  style={{ fontSize: 30, paddingTop: 45, paddingBottom: 14 }}
               >
                  Vos favoris
               </SectionTitle>

               <PlacesCarouselSection
                  title={`Mes villes favorites ${citiesFav.length > 0 ? `(${citiesFav.length})` : ''}`}
                  titleStyle={{ fontSize: 22 }}
                  data={citiesFav}
                  emptyComponent={
                     <EmptyState
                        headerTitle={"Aucune ville favorite pour l'instant"}
                        text={
                           'Une fois que vous aurez ajouté une ville à vos favoris, elle apparaîtra ici.'
                        }
                     />
                  }
                  scrollEnabled={citiesFav.length > 0}
                  renderItem={({ item }) => (
                     <CarouselItem>
                        <PlaceCard
                           name={item.name}
                           image={item.image}
                           onPress={() =>
                              navigation.navigate('CityDetail', {
                                 cityId: item.id,
                              })
                           }
                        />
                     </CarouselItem>
                  )}
               />

               <SectionDivider style={{ marginBottom: 8 }} />

               <PlacesCarouselSection
                  title={`Mes bâtiments favoris ${buildingsFav.length > 0 ? `(${buildingsFav.length})` : ''}`}
                  titleStyle={{ fontSize: 22 }}
                  data={buildingsFav}
                  emptyComponent={
                     <EmptyState
                        headerTitle={"Aucun bâtiment favori pour l'instant"}
                        text={
                           'Une fois que vous aurez ajouté un bâtiment à vos favoris, il apparaîtra ici.'
                        }
                     />
                  }
                  scrollEnabled={buildingsFav.length > 0}
                  renderItem={({ item }) => (
                     <CarouselItem>
                        <PlaceCard
                           name={item.name}
                           image={item.image}
                           onPress={() =>
                              navigation.navigate('BuildingDetail', {
                                 buildingId: item.id,
                              })
                           }
                        />
                     </CarouselItem>
                  )}
               />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
