import { StyleSheet, Text, View } from 'react-native'
import { Accordion } from '../ui'
import { firstChartToUpperCase } from '../../utils/utils'

export default function SchedulesSection({ buildingSchedules }) {
   const schedulesDays = buildingSchedules.days
   const scheduleType = buildingSchedules.type
   const scheduleNote = buildingSchedules.note

   // Vérifier le type pour afficher ou non les horaires
   return (
      <View>
         <Accordion title={'Horaires'}>
            {Object.entries(schedulesDays).map(([day, slots]) => (
               <View style={styles.schedulesRow} key={day}>
                  <Text style={styles.day}>{firstChartToUpperCase(day)}</Text>
                  <Text>
                     {slots.length > 0
                        ? `${slots[0].start} - ${slots[0].end}`
                        : 'Fermé'}
                  </Text>
               </View>
            ))}
         </Accordion>
      </View>
   )
}

const styles = StyleSheet.create({
   schedulesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
   },
   day: {
      fontWeight: 600,
   },
})
