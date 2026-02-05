import { ScrollView } from 'react-native'
import { HeroBanner, ScreenWrapper } from '../../components/ui'
import { cities } from '../../services/data'

export const CityDetailScreen = ({ route }) => {
   const { cityId } = route.params
   const city = cities.find((element) => element.id == cityId)

   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView>
            <HeroBanner
               title={city.name}
               image={{ uri: city.image }}
               style={{ fontSize: 34 }}
            />
         </ScrollView>
      </ScreenWrapper>
   )
}
