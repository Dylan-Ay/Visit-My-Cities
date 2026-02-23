import { ScreenWrapper } from '../../components/ui'
import { cities } from '../../services/data'
import PlacesGridSection from '../../components/sections/PlacesGridSection'

export const ExplorerScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <PlacesGridSection
            data={cities}
            heroTitle={'Planifions vos prochaines vacances !'}
            heroImg={require('../../../assets/ExplorerScreenBanner.jpg')}
            searchInputPlaceHolder={'Rechercher une ville'}
            sectionTitle={'Destinations'}
            onPressItem={(item) => {
               navigation.navigate('CityDetail', {
                  cityId: item.id,
               })
            }}
         />
      </ScreenWrapper>
   )
}
