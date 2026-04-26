import { RouteProp } from '@react-navigation/native'
import { useFavoriteStore } from '../../../store/useFavoriteStore'
import { HeaderIconButton } from './HeaderIconButton'
import { RootStackParamList } from '../../../navigation/types'

interface FavoriteBuildingHeaderButtonProps {
   route: RouteProp<RootStackParamList, 'BuildingDetail'>
}

export const FavoriteBuildingHeaderButton = ({ route }: FavoriteBuildingHeaderButtonProps) => {
   const { buildingId } = route.params
   const toggleFavBuilding = useFavoriteStore((state) => state.toggleFavoriteBuilding)
   const favoritesBuildings = useFavoriteStore((state) => state.favoriteBuildings)
   const isFav = favoritesBuildings.includes(buildingId)

   return (
      <HeaderIconButton
         icon={isFav ? 'heart' : 'heart-outline'}
         style={{ marginRight: 16 }}
         onPress={() => toggleFavBuilding(buildingId)}
      />
   )
}
