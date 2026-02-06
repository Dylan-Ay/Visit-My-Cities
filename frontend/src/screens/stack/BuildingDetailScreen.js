import { HeroBanner, ScreenWrapper } from '../../components/ui'
import { buildings } from '../../services/data'

export const BuildingDetailScreen = ({ navigation, route }) => {
   const { buildingId } = route.params
   const building = buildings.find((element) => element.id == buildingId)

   return (
      <ScreenWrapper useEdges={false}>
         <HeroBanner title={building.name} image={{ uri: building.image }} />
      </ScreenWrapper>
   )
}
