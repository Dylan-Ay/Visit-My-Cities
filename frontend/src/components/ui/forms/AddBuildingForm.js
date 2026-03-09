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
import { ErrorMessage } from './ErrorMessage'

export const AddBuildingForm = ({
   control,
   errors,
   watch,
   cityDropDown,
   categoryDropDown,
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
                  errorMessage={
                     errors.name && (
                        <ErrorMessage message={'Le nom est requis.'} />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="address"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Adresse'}
                  errorMessage={
                     errors.address && (
                        <ErrorMessage message={"L'adresse est requise."} />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="postal_code"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Code postal'}
                  errorMessage={
                     errors.postal_code && (
                        <ErrorMessage message={'Le code postal est requis.'} />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="city_id"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={cityDropDown}
                  value={value}
                  onChange={onChange}
                  label={'Ville'}
                  errorMessage={
                     errors.city_id && (
                        <ErrorMessage message={'La ville est requise.'} />
                     )
                  }
                  placeholder={'Sélectionner une ville'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="categories_id"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={categoryDropDown}
                  value={value}
                  onChange={onChange}
                  label={'Catégorie'}
                  errorMessage={
                     errors.categories_id && (
                        <ErrorMessage message={'La catégorie est requise'} />
                     )
                  }
                  placeholder={'Sélectionner une catégorie'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="image"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={"URL de l'image"}
                  errorMessage={
                     errors.image && (
                        <ErrorMessage
                           message={"L'URL de l'image est requise."}
                        />
                     )
                  }
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
            rules={{
               required: true,
            }}
            name="style"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={"Style d'architecture"}
                  errorMessage={
                     errors.style && (
                        <ErrorMessage
                           message={"Le style d'architecture est requis."}
                        />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
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
                  errorMessage={
                     errors.description && (
                        <ErrorMessage message={'La description est requise.'} />
                     )
                  }
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
               rules={{
                  required: true,
               }}
               name="ticket_price"
               render={({ field: { value, onChange } }) => (
                  <FormInput
                     value={value}
                     onChangeText={onChange}
                     onPress={() => onChange('')}
                     label={'Tarif'}
                     keyboardType="numeric"
                     containerStyle={{ width: '48%' }}
                     errorMessage={
                        errors.ticket_price && (
                           <ErrorMessage message={'Le tarif est requis.'} />
                        )
                     }
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
            rules={{
               required: true,
            }}
            name="booking"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={BOOKING_DATA}
                  value={value}
                  onChange={onChange}
                  label={'Réservation'}
                  placeholder={'Sélectionner un type de réservation'}
                  errorMessage={
                     errors.booking && (
                        <ErrorMessage
                           message={'Le type de réservation est requis.'}
                        />
                     )
                  }
                  search={false}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="access_status"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={ACCESS_STATUS_DATA}
                  value={value}
                  onChange={onChange}
                  label={"Statut d'accès"}
                  placeholder={'Sélectionner un statut'}
                  errorMessage={
                     errors.access_status && (
                        <ErrorMessage
                           message={"Le statut d'accès est requis."}
                        />
                     )
                  }
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
            rules={{
               required: true,
            }}
            name="schedules.type"
            render={({ field: { value, onChange } }) => (
               <CustomDropDown
                  data={SCHEDULES_TYPE_DATA}
                  value={value}
                  onChange={onChange}
                  label={"Type d'horaire"}
                  placeholder={"Sélectionner un type d'horaire"}
                  errorMessage={
                     errors.schedules?.type && (
                        <ErrorMessage
                           message={"Le type d'horaire est requis."}
                        />
                     )
                  }
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
            rules={{
               required: true,
            }}
            name="schedules.officialHoursUrl"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'URL des horaires officiels'}
                  errorMessage={
                     errors.schedules?.officialHoursUrl && (
                        <ErrorMessage
                           message={"L'URL des horaires officiels est requise."}
                        />
                     )
                  }
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
            rules={{
               required: true,
            }}
            name="latitude"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Latitude'}
                  keyboardType="numbers-and-punctuation"
                  errorMessage={
                     errors.latitude && (
                        <ErrorMessage message={'La latitude est requise.'} />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         <Controller
            control={control}
            rules={{
               required: true,
            }}
            name="longitude"
            render={({ field: { value, onChange } }) => (
               <FormInput
                  value={value}
                  onChangeText={onChange}
                  onPress={() => onChange('')}
                  label={'Longitude'}
                  keyboardType="numbers-and-punctuation"
                  errorMessage={
                     errors.longitude && (
                        <ErrorMessage message={'La longitude est requise'} />
                     )
                  }
                  returnKeyType={'next'}
               />
            )}
         />

         {Object.entries(errors).length > 0 && (
            <ErrorMessage
               message={
                  "Un ou plusieurs champs requis n'ont pas été complétés, veuillez réviser le formulaire."
               }
            />
         )}
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
})
