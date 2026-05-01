// prettier-ignore
import { ContentContainer, HeroBanner, ScreenWrapper, SectionDivider } from '../../components/ui'
import { ScrollView } from 'react-native'
import DescriptionSection from '../../components/sections/DescriptionSection'
import InfoSection from '../../components/sections/InfoSection'
import SchedulesSection from '../../components/sections/SchedulesSection'
import MapSection from '../../components/sections/MapSection'
import useBuilding from '../../services/hooks/useBuilding'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { Loader } from '../../components/ui/Loader'
import { getBuildingKeyInfos, getBuildingVisitInfos } from '../../utils/buildings'
import KeyInfosGrid from '../../components/sections/KeyInfosGrid'
import VisitInfosGrid from '../../components/sections/VisitInfosGrid'

export const BuildingDetailScreen = ({ route }) => {
   const { buildingId } = route.params
   const { building, isLoading } = useBuilding(buildingId)
   const showLoader = useDelayLoader(isLoading)

   if (showLoader) {
      return <Loader />
   }

   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView>
            {!showLoader && building && (
               <>
                  <HeroBanner title={building.name} image={{ uri: building.image }} />

                  <ContentContainer style={{ paddingBottom: 20 }}>
                     <InfoSection title="Informations clés">
                        <KeyInfosGrid items={getBuildingKeyInfos(building)} />
                     </InfoSection>
                     <SectionDivider />

                     <DescriptionSection text={building.description} linesNumber={4} />
                     <SectionDivider />

                     <InfoSection title={'Informations de visite'}>
                        <VisitInfosGrid items={getBuildingVisitInfos(building)} />
                     </InfoSection>
                     <SectionDivider />

                     <SchedulesSection buildingSchedules={building.schedules} />
                     <SectionDivider />

                     <MapSection
                        name={building.name}
                        address={[building.address, building.postalCode]}
                        region={building.coords}
                     />
                     <SectionDivider />
                  </ContentContainer>
               </>
            )}
         </ScrollView>
      </ScreenWrapper>
   )
}
