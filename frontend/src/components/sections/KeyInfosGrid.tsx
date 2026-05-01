import { StyleSheet, View } from 'react-native'
import { KeyInfoItem } from '../ui/cards/KeyInfoItem'
import { divideOddsAndEvens } from '../../utils/utils'
import { BuildingInfos } from '../../types/building'

interface KeyInfosGridProps {
   items: BuildingInfos[]
}

export default function KeyInfosGrid({ items }: KeyInfosGridProps) {
   const { leftColumn, rightColumn } = divideOddsAndEvens(items)

   return (
      <View style={styles.container}>
         <View style={{ width: '50%' }}>
            {leftColumn.map((el, index) => (
               <KeyInfoItem key={index} icon={el.icon} label={el.label} value={el.value} />
            ))}
         </View>
         <View style={{ width: '50%' }}>
            {rightColumn.map((el, index) => (
               <KeyInfoItem key={index} icon={el.icon} label={el.label} value={el.value} />
            ))}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 16,
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
   },
})
