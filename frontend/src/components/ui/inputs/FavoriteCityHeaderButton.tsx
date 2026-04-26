import { RouteProp } from '@react-navigation/native'
import { useFavoriteStore } from '../../../store/useFavoriteStore'
import { HeaderIconButton } from './HeaderIconButton'
import { RootStackParamList } from '../../../navigation/types'

interface FavoriteCityHeaderButtonProps {
   route: RouteProp<RootStackParamList, 'CityDetail'>
}

export const FavoriteCityHeaderButton = ({ route }: FavoriteCityHeaderButtonProps) => {
   const { cityId } = route.params
   const toggleFavCity = useFavoriteStore((state) => state.toggleFavoriteCity)
   const favoritesCities = useFavoriteStore((state) => state.favoriteCities)
   const isFav = favoritesCities.includes(cityId)

   return (
      <HeaderIconButton
         icon={isFav ? 'heart' : 'heart-outline'}
         style={{ marginRight: 16 }}
         onPress={() => toggleFavCity(cityId)}
      />
   )
}
