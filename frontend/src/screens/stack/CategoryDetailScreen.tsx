import PlacesGridSection from '../../components/sections/PlacesGridSection'
import { ScreenWrapper } from '../../components/ui'
import useBuildingsByCategory from '../../services/hooks/category/useBuildingsByCategory'
import useCategory from '../../services/hooks/category/useCategory'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { Loader } from '../../components/ui/Loader'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/types'

interface CategoryDetailScreenProps {
   navigation: NativeStackNavigationProp<RootStackParamList, 'CategoryDetail'>
   route: RouteProp<RootStackParamList, 'CategoryDetail'>
}

export const CategoryDetailScreen = ({ navigation, route }: CategoryDetailScreenProps) => {
   const { categoryId } = route.params
   const { category } = useCategory(categoryId)
   const { buildingsByCategory, isLoading } = useBuildingsByCategory(categoryId)
   const showLoader = useDelayLoader(isLoading)

   if (showLoader) {
      return <Loader />
   }

   return (
      <ScreenWrapper useEdges={false}>
         <PlacesGridSection
            data={buildingsByCategory}
            heroTitle={`Les ${category?.name}`}
            heroImg={{ uri: category?.image }}
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
