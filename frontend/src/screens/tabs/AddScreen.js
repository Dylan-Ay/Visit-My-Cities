import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
   ScreenWrapper,
   ContentContainer,
   FormInput,
   SectionDivider,
   DropDown,
   SectionTitle,
} from '../../components/ui'
import { HeaderSection } from '../../components/sections/HeaderSection'
import AuthActionsSection from '../../components/sections/AuthActionsSection'
import { useMemo } from 'react'
import useCities from '../../services/hooks/useCities'
import useCategories from '../../services/hooks/useCategories'
import { Loader } from '../../components/ui/Loader'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { useForm, Controller } from 'react-hook-form'
import { ACCESS_STATUS_DATA } from '../../constants/accessStatusData'
import { BOOKING_DATA } from '../../constants/bookingData'
import { ACCESSIBILITY_DATA } from '../../constants/accessibilityData'

export const AddScreen = ({ navigation }) => {
   const { cities, isLoadingCity } = useCities()
   const { categories, isLoadingCat } = useCategories()

   const isLoadingGlobal = isLoadingCity || isLoadingCat
   const showGlobalLoader = useDelayLoader(isLoadingGlobal)

   const cityDropDown = useMemo(
      () =>
         cities?.map((city) => ({
            label: city.name,
            value: city.id,
         })) ?? [],
      [cities]
   )

   const categoryDropDown = useMemo(
      () =>
         categories?.map((cat) => ({
            label: cat.name,
            value: cat.id,
         })) ?? [],
      [categories]
   )

   const { control, handleSubmit } = useForm({
      defaultValues: {
         name: '',
         address: '',
         postal_code: '',
         city_id: null,
         categories_id: null,
         image: '',
         construction_year: '',
         architect: '',
         style: '',
         description: '',
         ticket_price: '',
         visit_duration: '',
         booking: '',
         access_status: '',
         accessible_prm: '',
         latitude: '',
         longitude: '',
      },
   })

   if (showGlobalLoader) {
      return <Loader />
   }

   return (
      <ScreenWrapper>
         <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets={true}
         >
            <ContentContainer>
               <HeaderSection
                  title={"Ajout d'un bâtiment"}
                  subTitle={
                     "Grâce à ce formulaire, vous pouvez ajouter un bâtiment en tant qu'expert."
                  }
               />

               <View style={styles.inputsContainer}>
                  <SectionTitle
                     containerStyle={{ paddingBottom: 0, paddingTop: 0 }}
                     style={{ fontSize: 22 }}
                  >
                     Infos principales
                  </SectionTitle>

                  <Controller
                     control={control}
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
                        <DropDown
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
                        <DropDown
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

                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                     }}
                  >
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
                  </View>

                  <Controller
                     control={control}
                     name="booking"
                     render={({ field: { value, onChange } }) => (
                        <DropDown
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
                        <DropDown
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
                        <DropDown
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

                  <FormInput
                     value={''}
                     onChangeText={''}
                     label={'Jours'}
                     returnKeyType={'next'}
                  />

                  <FormInput
                     value={''}
                     onChangeText={''}
                     label={'Heures'}
                     returnKeyType={'next'}
                  />

                  <FormInput
                     value={''}
                     onChangeText={''}
                     label={"Note d'information"}
                     returnKeyType={'next'}
                  />

                  <FormInput
                     value={''}
                     onChangeText={''}
                     label={'Lien des horaires officiels'}
                     keyboardType="url"
                     returnKeyType={'next'}
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

               <AuthActionsSection
                  primaryTitle={'Valider'}
                  primaryOnPress={handleSubmit}
               />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}

const styles = StyleSheet.create({
   inputsContainer: {
      gap: 24,
      paddingBottom: 20,
   },
})
