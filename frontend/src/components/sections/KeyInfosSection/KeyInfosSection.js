import { SectionTitle } from '../../ui'
import KeyInfosGrid from './KeyInfosGrid'
import { View } from 'react-native'
import { getBuildingInfos } from '../../../utils/utils'

export default function KeyInfosSection({ building }) {
   const buildingKeyInfos = getBuildingInfos(building)

   return (
      <View>
         <SectionTitle style={{ fontSize: 22 }}>Infos clés</SectionTitle>
         <KeyInfosGrid items={buildingKeyInfos} />
      </View>
   )
}
