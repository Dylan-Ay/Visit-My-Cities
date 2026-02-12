import { StyleSheet, Text, View } from 'react-native'
import { Accordion } from '../ui'

export default function SchedulesSection({ buildingSchedules }) {
   const schedulesDays = buildingSchedules.days
   const scheduleType = buildingSchedules.type
   const scheduleNote = buildingSchedules.note

   console.log(
      Object.entries(schedulesDays).map(([day, slots]) =>
         console.log(day + ' ' + slots)
      )
   )
   // Vérifier le type pour afficher ou non les horaires
   return (
      <View>
         <Accordion title={'Horaires'}>
            {Object.entries(schedulesDays).map(([day, slots]) => (
               <View style={styles.schedulesRow} key={day}>
                  <Text>{day}</Text>
                  <Text>
                     {slots[0].start} - {slots[0].end}
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
      paddingVertical: 12,
   },
})
