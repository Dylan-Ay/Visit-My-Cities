import { ScrollView } from "react-native"
import { ScreenWrapper, SearchInput, CityCard, BuildingCard, ContentContainer, HeroBanner } from "../components/ui"
import PopularSection from "../components/sections/PopularSection"
import CategorySection from "../components/sections/CategorySection";
import { popularBuildings, popularCities, categories } from "../services/data";

export const HomeScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <HeroBanner 
               title={"Découvrez les bâtiments du monde entier !"} 
               image={require('../../assets/HomeScreenBanner.png')}
            />
            
            <ContentContainer>
               <SearchInput placeholder={"Rechercher une ville"}></SearchInput>
            
               <PopularSection 
                  title={"Villes populaires"} 
                  data={popularCities} 
                  renderItem={({ item }) => <CityCard city={item} />} 
               />

               <PopularSection
                  title={"Bâtiments populaires"}
                  data={popularBuildings}
                  renderItem={({ item }) => <BuildingCard building={item} />}
               />

               <CategorySection
                  title={"Catégories"}
                  data={categories}
               />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}