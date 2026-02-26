import { ScreenWrapper } from '../../components/ui'
import PlacesGridSection from '../../components/sections/PlacesGridSection'
import useCities from '../../services/hooks/useCities'
import { Loader } from '../../components/ui/Loader'

export const ExplorerScreen = ({ navigation }) => {
   const { cities, isLoading } = useCities()

   if (isLoading) {
      return <Loader />
   }

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
