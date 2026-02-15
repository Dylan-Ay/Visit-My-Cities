import { ScreenWrapper } from '../../components/ui'
import { buildings, cities } from '../../services/data'
import ExploreGridSection from '../../components/sections/ExploreGridSection'

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
         <ExploreGridSection
            data={cityBuildings}
            heroTitle={city.name}
            heroImg={{ uri: city.image }}
            searchInputPlaceHolder={'Rechercher un monument/bâtiment'}
            sectionTitle={'Monuments et bâtiments'}
            onPressItem={(item) =>
               navigation.navigate('BuildingDetail', {
                  buildingId: item.id,
               })
            }
         />
      </ScreenWrapper>
   )
}
