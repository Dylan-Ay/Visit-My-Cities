import { ScreenWrapper } from '../../components/ui'
import { buildings, cities } from '../../services/data'
import PlacesGridSection from '../../components/sections/PlacesGridSection'
import { getBuildingsByCity } from '../../utils/buildings'

export const CityDetailScreen = ({ navigation, route }) => {
   const { cityId } = route.params
   const city = cities.find((cityItem) => cityItem.id == cityId)
   const cityBuildings = getBuildingsByCity(buildings, cityId)

   return (
      <ScreenWrapper useEdges={false}>
         <PlacesGridSection
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
