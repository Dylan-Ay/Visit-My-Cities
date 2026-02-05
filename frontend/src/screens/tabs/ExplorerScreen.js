// prettier-ignore
import { ScreenWrapper, HeroBanner, SearchInput, ContentContainer, PlaceCard, SectionTitle } from '../../components/ui'
import { FlatList } from 'react-native'
import { cities } from '../../services/data'

{
   /* Liste de villes de la db avec barre de recherche, carousel vertical, clique sur la ville -> affichage des bâtiments -> clique sur bâtiment -> détail du bâtiment. 
   Options : fonctions de tri et de filtre*/
}

export const ExplorerScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <FlatList
            data={cities}
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
                        navigation.navigate('CityDetail', {
                           cityId: item.id,
                        })
                     }
                  />
               </ContentContainer>
            )}
            ListHeaderComponent={
               <>
                  <HeroBanner
                     title="Planifions vos prochaines vacances !"
                     image={require('../../../assets/ExplorerScreenBanner.jpg')}
                  />
                  <ContentContainer>
                     <SearchInput placeholder="Rechercher une ville" />
                     <SectionTitle>Destinations</SectionTitle>
                  </ContentContainer>
               </>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
         />
      </ScreenWrapper>
   )
}
