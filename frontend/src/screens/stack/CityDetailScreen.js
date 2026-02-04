import { HeaderTitle, ScreenWrapper } from '../../components/ui'
import { cities } from '../../services/data'

export const CityDetailScreen = ({ route }) => {
   const { cityId } = route.params
   const city = cities.find((element) => (element.id = cityId))

   return (
      <ScreenWrapper>
         <HeaderTitle>Détail de la ville de {city.name}</HeaderTitle>
      </ScreenWrapper>
   )
}
