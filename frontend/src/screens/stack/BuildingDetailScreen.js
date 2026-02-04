import { HeaderTitle, ScreenWrapper } from '../../components/ui'
import { buildings } from '../../services/data'

export const BuildingDetailScreen = ({ route }) => {
   const { buildingId } = route.params
   const building = buildings.find((element) => (element.id = buildingId))

   return (
      <ScreenWrapper>
         <HeaderTitle>Détail du bâtiment {building.name}</HeaderTitle>
      </ScreenWrapper>
   )
}
