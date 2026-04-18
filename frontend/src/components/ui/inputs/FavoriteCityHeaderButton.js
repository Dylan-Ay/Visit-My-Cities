import { useFavoriteStore } from '../../../store/useFavoriteStore'
import { HeaderIconButton } from './HeaderIconButton'

export const FavoriteCityHeaderButton = ({ route }) => {
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
