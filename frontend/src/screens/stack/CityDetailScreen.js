import { ScreenWrapper } from '../../components/ui'
import PlacesGridSection from '../../components/sections/PlacesGridSection'
import useBuildingsByCity from '../../services/hooks/useBuildingsByCitiy'
import { Loader } from '../../components/ui/Loader'
import useCity from '../../services/hooks/useCity'

export const CityDetailScreen = ({ navigation, route }) => {
   const { cityId } = route.params
   const { city } = useCity(cityId)
   const { buildingsByCity, isLoading } = useBuildingsByCity(cityId)

   if (isLoading) {
      return <Loader />
   }

   return (
      <ScreenWrapper useEdges={false}>
         <PlacesGridSection
            data={buildingsByCity}
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
