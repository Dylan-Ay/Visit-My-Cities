// prettier-ignore
import { ContentContainer, HeroBanner, ScreenWrapper, SectionDivider } from '../../components/ui'
import { ScrollView } from 'react-native'
import { buildings } from '../../services/data'
import KeyInfosSection from '../../components/sections/KeyInfosSection/KeyInfosSection'
import DescriptionSection from '../../components/sections/DescriptionSection'
import VisitInfoSection from '../../components/sections/VisitInfoSection/VisitInfoSection'
import SchedulesSection from '../../components/sections/SchedulesSection'
import MapSection from '../../components/sections/MapSection'

export const BuildingDetailScreen = ({ route }) => {
   const { buildingId } = route.params
   const building = buildings.find((element) => element.id == buildingId)
   const fullAdress = [building.address, building.postalCode]

   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView>
            <HeroBanner title={building.name} image={{ uri: building.image }} />

            <ContentContainer style={{ paddingBottom: 20 }}>
               <KeyInfosSection building={building} />
               <SectionDivider />

               <DescriptionSection
                  text={building.description}
                  linesNumber={4}
               />
               <SectionDivider />

               <VisitInfoSection building={building} />
               <SectionDivider />

               <SchedulesSection buildingSchedules={building.schedules} />
               <SectionDivider />

               <MapSection
                  name={building.name}
                  address={fullAdress}
                  region={building.coords}
               />
               <SectionDivider />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
