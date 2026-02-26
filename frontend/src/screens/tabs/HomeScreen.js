// prettier-ignore
import { ScreenWrapper, SearchInput, ContentContainer, HeroBanner, PlaceCard } from "../../components/ui"
import { ScrollView } from 'react-native'
import PlacesCarouselSection from '../../components/sections/PlacesCarouselSection'
import CategorySection from '../../components/sections/CategorySection'
import { CarouselItem } from '../../components/ui/layout/CarouselItem'
import useBuildings from '../../services/hooks/useBuildings'
import useCities from '../../services/hooks/useCities'
import useCategories from '../../services/hooks/useCategories'
import { Loader } from '../../components/ui/Loader'

export const HomeScreen = ({ navigation }) => {
   const { buildings, isLoading: isBuildingsLoading } = useBuildings()
   const { cities, isLoading: isCitiesLoading } = useCities()
   const { categories, isLoading: isCategoriesLoading } = useCategories()

   const isLoadingGlobal =
      isBuildingsLoading || isCitiesLoading || isCategoriesLoading

   if (isLoadingGlobal) {
      return <Loader />
   }

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
                  data={buildings.slice(0, 6)}
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
