import { ScreenWrapper } from '../../components/ui'
import PlacesGridSection from '../../components/sections/PlacesGridSection'
import useBuildingsByCity from '../../services/hooks/city/useBuildingsByCity'
import { Loader } from '../../components/ui/Loader'
import useCity from '../../services/hooks/city/useCity'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { RootStackParamList } from '../../navigation/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

interface CityDetailScreenProps {
   navigation: NativeStackNavigationProp<RootStackParamList, 'CityDetail'>
   route: RouteProp<RootStackParamList, 'CityDetail'>
}

export const CityDetailScreen = ({ navigation, route }: CityDetailScreenProps) => {
   const { cityId } = route.params
   const { city } = useCity(cityId)
   const { buildingsByCity, isLoading } = useBuildingsByCity(cityId)
   const showLoader = useDelayLoader(isLoading)

   if (showLoader || !city) {
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
