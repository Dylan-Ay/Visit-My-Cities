import PlacesGridSection from '../../components/sections/PlacesGridSection'
import { ScreenWrapper } from '../../components/ui'
import { buildings, categories } from '../../services/data'
import { getBuildingsByCategory } from '../../utils/buildings'

export const CategoryDetailScreen = ({ navigation, route }) => {
   const { categoryId } = route.params
   const category = categories.find((c) => c.id == categoryId)
   const buildingsByCat = getBuildingsByCategory(buildings, categoryId)

   return (
      <ScreenWrapper useEdges={false}>
         <PlacesGridSection
            data={buildingsByCat}
            heroTitle={`Les ${category.name}`}
            heroImg={{ uri: category.img }}
            searchInputPlaceHolder={'Rechercher un bâtiment'}
            sectionTitle={''}
            titleContainerStyle={{ paddingBottom: 0, paddingTop: 12 }}
            onPressItem={(item) => {
               navigation.navigate('BuildingDetail', {
                  buildingId: item.id,
               })
            }}
         />
      </ScreenWrapper>
   )
}
