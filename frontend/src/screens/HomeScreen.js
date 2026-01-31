// prettier-ignore
import { ScreenWrapper, SearchInput, CityCard, BuildingCard, ContentContainer, HeroBanner, PlaceCard } from "../components/ui"
import { ScrollView } from 'react-native'
import PopularSection from '../components/sections/PopularSection'
import CategorySection from '../components/sections/CategorySection'
import { popularBuildings, cities, categories } from '../services/data'
import { CarouselItem } from '../components/ui/layout/CarouselItem'

export const HomeScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <HeroBanner
               title={'Découvrez les bâtiments du monde entier !'}
               image={require('../../assets/HomeScreenBanner.png')}
            />

            <ContentContainer style={{ paddingBottom: 20 }}>
               <SearchInput placeholder={'Rechercher une ville'}></SearchInput>

               <PopularSection
                  title={'Villes populaires'}
                  data={cities.slice(0, 6)}
                  renderItem={({ item }) => (
                     <CarouselItem>
                        <PlaceCard name={item.name} image={item.image} />
                     </CarouselItem>
                  )}
               />

               <PopularSection
                  title={'Bâtiments populaires'}
                  data={popularBuildings}
                  renderItem={({ item }) => (
                     <CarouselItem>
                        <PlaceCard name={item.name} image={item.image} />
                     </CarouselItem>
                  )}
               />

               <CategorySection title={'Catégories'} data={categories} />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
