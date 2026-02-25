// prettier-ignore
import { ScreenWrapper, SearchInput, ContentContainer, HeroBanner, PlaceCard } from "../../components/ui"
import { Alert, ScrollView } from 'react-native'
import PlacesCarouselSection from '../../components/sections/PlacesCarouselSection'
import CategorySection from '../../components/sections/CategorySection'
import { getBuildings } from '../../services/buildings/buildings.service'
import { getCities } from '../../services/cities/cities.service'
import { getCategories } from '../../services/categories/categories.service'
import { CarouselItem } from '../../components/ui/layout/CarouselItem'
import { useEffect, useState } from 'react'

export const HomeScreen = ({ navigation }) => {
   const [popularBuildings, setPopularBuildings] = useState([])
   const [popularCities, setPopularCities] = useState([])
   const [categories, setCategories] = useState([])

   useEffect(() => {
      loadHomeCarousels()
   }, [])

   const loadHomeCarousels = async () => {
      try {
         const cities = await getCities()
         const buildings = await getBuildings()
         const categories = await getCategories()

         setPopularCities(cities.slice(0, 6))
         setPopularBuildings(buildings.slice(0, 6))
         setCategories(categories)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      }
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
                  data={popularCities}
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
                  data={popularBuildings}
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
