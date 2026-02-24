// prettier-ignore
import { ScreenWrapper, SearchInput, ContentContainer, HeroBanner, PlaceCard } from "../../components/ui"
import { ScrollView } from 'react-native'
import PlacesCarouselSection from '../../components/sections/PlacesCarouselSection'
import CategorySection from '../../components/sections/CategorySection'
import { buildings, cities, categories } from '../../services/data'
import { CarouselItem } from '../../components/ui/layout/CarouselItem'

export const HomeScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <HeroBanner
               title={'Découvrez les bâtiments du monde entier !'}
               image={require('../../../assets/HomeScreenBanner.png')}
            />

            <ContentContainer style={{ paddingBottom: 20 }}>
               <SearchInput placeholder={'Rechercher une ville'}></SearchInput>

               <PlacesCarouselSection
                  title={'Villes populaires'}
                  data={cities.slice(0, 6)}
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

               <PlacesCarouselSection
                  title={'Bâtiments populaires'}
                  data={buildings}
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

               <CategorySection
                  title={'Catégories'}
                  data={categories}
                  navigation={navigation}
               />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
