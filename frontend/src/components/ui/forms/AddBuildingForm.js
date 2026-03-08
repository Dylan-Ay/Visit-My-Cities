import { Text, View } from 'react-native'
import { SectionTitle } from '../typography/SectionTitle'
import { Controller } from 'react-hook-form'
import { FormInput } from '../inputs/FormInput'
import { CustomDropDown } from '../inputs/CustomDropDown'
import { SectionDivider } from '../layout/SectionDivider'
import { StyleSheet } from 'react-native'
import { ACCESS_STATUS_DATA } from '../../../constants/accessStatusData'
import { BOOKING_DATA } from '../../../constants/bookingData'
import { ACCESSIBILITY_DATA } from '../../../constants/accessibilityData'
import { SCHEDULES_TYPE_DATA } from '../../../constants/schedulesTypeData'
import { generateTimeSlots } from '../../../utils/utils'
import { TwoColumns } from '../layout/TwoColumns'
import { Checkbox } from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons'

export const AddBuildingForm = ({
   control,
   errors,
   cityDropDown,
   categoryDropDown,
   watch,
}) => {
   const sameForAllDays = watch('schedules.sameForAllDays')

   return (
      <View style={styles.inputsContainer}>
         <SectionTitle
            containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
            style={{ fontSize: 22 }}
         >
            Infos principales
         </SectionTitle>

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="name"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Nom'}
                  returnKeyType={'next'}
               />
            )}
         />
         {errors.name && (
            <Text style={styles.error}>
               <Ionicons name="alert-circle-outline" style={styles.errorIcon} />{' '}
               Le nom est requis.
            </Text>
         )}

         <Controller
            control={control}
            name="address"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Adresse'}
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="postal_code"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Code postal'}
                  keyboardType="numeric"
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="city_id"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={cityDropDown}
                  value={value}
                  onChange={onChange}
                  label={'Ville'}
                  placeholder={'Sélectionner une ville'}
               />
            )}
         />

         <Controller
            control={control}
            name="categories_id"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={categoryDropDown}
                  value={value}
                  onChange={onChange}
                  label={'Catégorie'}
                  placeholder={'Sélectionner une catégorie'}
               />
            )}
         />

         <Controller
            control={control}
            name="image"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={"URL de l'image"}
                  returnKeyType={'next'}
               />
            )}
         />

         <SectionDivider style={{ marginTop: 10 }} />
         <SectionTitle
            containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
            style={{ fontSize: 22 }}
         >
            Infos clés
         </SectionTitle>

         <Controller
            control={control}
            name="construction_year"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Année de construction'}
                  keyboardType="numeric"
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="architect"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Architecte'}
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="style"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={"Style d'architecture"}
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="description"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Description'}
                  style={{ height: 80 }}
                  multiline={true}
                  numberOfLines={3}
                  returnKeyType={'next'}
               />
            )}
         />

         <SectionDivider style={{ marginTop: 10 }} />
         <SectionTitle
            containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
            style={{ fontSize: 22 }}
         >
            Infos de visite
         </SectionTitle>

         <TwoColumns>
            <Controller
               control={control}
               name="ticket_price"
               render={({ field: { value, onChange } }) => (
                  <FormInput
                     value={value}
                     onChangeText={onChange}
                     onPress={() => onChange('')}
                     label={'Tarif'}
                     keyboardType="numeric"
                     containerStyle={{ width: '48%' }}
                     returnKeyType={'next'}
                  />
               )}
            />

            <Controller
               control={control}
               name="visit_duration"
               render={({ field: { value, onChange } }) => (
                  <FormInput
                     value={value}
                     onChangeText={onChange}
                     onPress={() => onChange('')}
                     label={'Temps de visite'}
                     containerStyle={{ width: '48%' }}
                     returnKeyType={'next'}
                  />
               )}
            />
         </TwoColumns>

         <Controller
            control={control}
            name="booking"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={BOOKING_DATA}
                  value={value}
                  onChange={onChange}
                  label={'Réservation'}
                  placeholder={'Sélectionner un type de réservation'}
                  search={false}
               />
            )}
         />

         <Controller
            control={control}
            name="access_status"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={ACCESS_STATUS_DATA}
                  value={value}
                  onChange={onChange}
                  label={"Statut d'accès"}
                  placeholder={'Sélectionner un statut'}
                  search={false}
               />
            )}
         />

         <Controller
            control={control}
            name="accessibleprm"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={ACCESSIBILITY_DATA}
                  value={value}
                  onChange={onChange}
                  label={'Accessibilité PMR'}
                  placeholder={"Sélectionner un type d'accessibilité"}
                  search={false}
               />
            )}
         />

         <SectionDivider style={{ marginTop: 10 }} />
         <SectionTitle
            containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
            style={{ fontSize: 22 }}
         >
            Horaires
         </SectionTitle>

         <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
               Les horaires sont les mêmes tous les jours
            </Text>
            <Controller
               control={control}
               name="schedules.sameForAllDays"
               render={({ field: { value, onChange } }) => (
                  <Checkbox
                     style={styles.checkbox}
                     value={value}
                     onValueChange={onChange}
                  />
               )}
            />
         </View>
         {sameForAllDays && (
            <TwoColumns>
               <Controller
                  control={control}
                  name="schedules.globalStart"
                  render={({ field: { value, onChange } }) => (
                     <CustomDropDown
                        data={generateTimeSlots()}
                        value={value}
                        onChange={onChange}
                        placeholder={"Heure d'ouverture"}
                        containerStyle={{ width: '48%' }}
                        isLabel={false}
                        search={false}
                     />
                  )}
               />

               <Controller
                  control={control}
                  name="schedules.globalEnd"
                  render={({ field: { value, onChange } }) => (
                     <CustomDropDown
                        data={generateTimeSlots()}
                        value={value}
                        onChange={onChange}
                        placeholder={'Heure de fermeture'}
                        containerStyle={{ width: '48%' }}
                        isLabel={false}
                        search={false}
                     />
                  )}
               />
            </TwoColumns>
         )}

         {!sameForAllDays && (
            <>
               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.lundi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Lundi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.lundi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.mardi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Mardi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.mardi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.mercredi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Mercredi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.mercredi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.jeudi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Jeudi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.jeudi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.vendredi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Vendredi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.vendredi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.samedi.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Samedi'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.samedi.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>

               <TwoColumns>
                  <Controller
                     control={control}
                     name="schedules.days.dimanche.0.start"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           label={'Dimanche'}
                           placeholder={"Heure d'ouverture"}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="schedules.days.dimanche.0.end"
                     render={({ field: { value, onChange } }) => (
                        <CustomDropDown
                           data={generateTimeSlots()}
                           value={value}
                           onChange={onChange}
                           placeholder={'Heure de fermeture'}
                           containerStyle={{ width: '48%' }}
                           search={false}
                        />
                     )}
                  />
               </TwoColumns>
            </>
         )}

         <Controller
            control={control}
            name="schedules.type"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={SCHEDULES_TYPE_DATA}
                  value={value}
                  onChange={onChange}
                  label={"Type d'horaire"}
                  placeholder={"Sélectionner un type d'horaire"}
                  search={false}
               />
            )}
         />

         <Controller
            control={control}
            name="schedules.note"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={"Note d'information"}
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="schedules.officialHoursUrl"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'URL des horaires officiels'}
                  returnKeyType={'next'}
               />
            )}
         />

         <SectionDivider style={{ marginTop: 10 }} />
         <SectionTitle
            containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
            style={{ fontSize: 22 }}
         >
            Coordonnées
         </SectionTitle>

         <Controller
            control={control}
            name="latitude"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Latitude'}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            name="longitude"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Longitude'}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType={'next'}
               />
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   inputsContainer: {
      gap: 24,
      paddingBottom: 20,
   },
   checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 6,
   },
   checkboxLabel: {
      fontSize: 16,
   },
   error: {
      color: 'red',
      marginTop: -14,
   },
   errorIcon: {
      fontSize: 16,
   },
})
