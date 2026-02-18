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
// import { buildings } from '../../services/data'
import { cities } from '../../services/data'

export const VisitScreen = ({ navigation }) => {
   // const cities = []
   const buildings = []
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
                  title={`Mes villes favorites ${cities.length > 0 ? `(${cities.length})` : ''}`}
                  titleStyle={{ fontSize: 22 }}
                  data={cities}
                  emptyComponent={
                     <EmptyState
                        headerTitle={"Aucune ville favorite pour l'instant"}
                        text={
                           'Une fois que vous aurez ajouté une ville à vos favoris, elle apparaîtra ici.'
                        }
                     />
                  }
                  scrollEnabled={cities.length > 0}
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
                  title={`Mes bâtiments favoris ${buildings.length > 0 ? `(${buildings.length})` : ''}`}
                  titleStyle={{ fontSize: 22 }}
                  data={buildings}
                  emptyComponent={
                     <EmptyState
                        headerTitle={"Aucun bâtiment favori pour l'instant"}
                        text={
                           'Une fois que vous aurez ajouté un bâtiment à vos favoris, il apparaîtra ici.'
                        }
                     />
                  }
                  scrollEnabled={buildings.length > 0}
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
