import { StyleSheet, Text, View } from 'react-native'
import { Accordion } from '../ui'
import { firstChartToUpperCase, getTodayDay } from '../../utils/utils'
import { Linking } from 'react-native'
import { orderDaysProperly } from '../../utils/buildings'
import { Schedules } from '../../types/building'

interface SchedulesSectionProps {
   buildingSchedules: Schedules
}

export default function SchedulesSection({ buildingSchedules }: SchedulesSectionProps) {
   const schedulesType = buildingSchedules.type
   const schedulesNote = buildingSchedules.note
   const schedulesUrl = buildingSchedules.officialHoursUrl
   const schedulesDays = orderDaysProperly(buildingSchedules.days)
   const todayDay = getTodayDay()

   return (
      <View>
         <Accordion title={'Horaires'}>
            {schedulesType != 'Variable' &&
               Object.entries(schedulesDays).map(([day, slots]) => (
                  <View
                     style={[styles.schedulesRow, todayDay == day ? styles.active : '']}
                     key={day}
                  >
                     <Text style={styles.day}>{firstChartToUpperCase(day)}</Text>
                     <Text>
                        {slots.length > 0 && slots[0].start.length > 0 && slots[0].end.length > 0
                           ? `${slots[0].start} - ${slots[0].end}`
                           : 'Fermé'}
                     </Text>
                  </View>
               ))}

            <View style={styles.noteContainer}>
               {schedulesType == 'Variable' && (
                  <Text style={styles.variableSchedules}>Horaires Variables</Text>
               )}
               <Text style={styles.note}>{schedulesNote}</Text>
               {schedulesUrl && (
                  <Text style={styles.link} onPress={() => Linking.openURL(schedulesUrl)}>
                     Consultez le site pour vérifier les horaires avant votre visite.
                  </Text>
               )}
            </View>
         </Accordion>
      </View>
   )
}

const styles = StyleSheet.create({
   schedulesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 16,
   },
   active: {
      backgroundColor: 'rgb(200, 209, 244)',
   },
   day: {
      fontWeight: 600,
   },
   noteContainer: {
      padding: 16,
      marginTop: 16,
      backgroundColor: 'rgb(230, 230, 230)',
      borderRadius: 16,
      gap: 10,
   },
   note: {
      color: '#393939',
   },
   link: {
      fontWeight: 500,
      color: '#393939',
      textDecorationLine: 'underline',
   },
   variableSchedules: {
      fontWeight: 600,
      fontSize: 16,
   },
})
