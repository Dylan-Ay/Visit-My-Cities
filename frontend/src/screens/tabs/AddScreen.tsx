import { Alert, ScrollView } from 'react-native'
import { ScreenWrapper, ContentContainer, AddBuildingForm } from '../../components/ui'
import { HeaderSection } from '../../components/sections/HeaderSection'
import ActionsSections from '../../components/sections/ActionsSections'
import { useMemo, useRef } from 'react'
import useCities from '../../services/hooks/city/useCities'
import useCategories from '../../services/hooks//category/useCategories'
import { Loader } from '../../components/ui/Loader'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { useForm } from 'react-hook-form'
import { addBuildingDefaultValues } from '../config/addBuildingDefaultValues'
import { useAddBuilding } from '../../services/hooks/building/useAddBuilding'
import { useScrollToTop } from '@react-navigation/native'
import { FormsValues } from '../../components/ui/forms/types'
import { WeekDay } from '../../types/building'

export const AddScreen = () => {
   const { cities, isLoadingCity } = useCities()
   const { categories, isLoadingCat } = useCategories()
   const { addBuildingHandler, isLoadingBuild } = useAddBuilding()
   const isLoadingGlobal = isLoadingCity || isLoadingCat || isLoadingBuild
   const showGlobalLoader = useDelayLoader(isLoadingGlobal)
   const scrollViewRef = useRef<ScrollView>(null)

   useScrollToTop(scrollViewRef)

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

   const {
      control,
      watch,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({
      defaultValues: addBuildingDefaultValues as unknown as FormsValues,
   })

   const onSubmit = async (data: FormsValues) => {
      if (data.schedules.sameForAllDays) {
         const days = Object.keys(data.schedules.days) as WeekDay[]
         days.forEach((day: WeekDay) => {
            data.schedules.days[day][0].start = data.schedules.globalStart as string
            data.schedules.days[day][0].end = data.schedules.globalEnd as string
         })
      }
      const buildingName = data.name

      const payload = {
         ...data,
         schedules: { ...data.schedules },
         latitude: data.coords.latitude,
         longitude: data.coords.longitude,
      }

      delete payload.schedules.sameForAllDays
      delete payload.schedules.globalStart
      delete payload.schedules.globalEnd

      try {
         await addBuildingHandler(payload)

         scrollViewRef.current?.scrollTo({
            y: 0,
            animated: true,
         })

         reset(addBuildingDefaultValues as unknown as FormsValues)

         Alert.alert(`Le bâtiment ${buildingName} a bien été ajouté !`)
      } catch (error) {
         console.log(error)
         Alert.alert(`Le bâtiment ${buildingName} existe déjà.`)
      }
   }

   if (showGlobalLoader) {
      return <Loader />
   }

   return (
      <ScreenWrapper>
         <ScrollView
            ref={scrollViewRef}
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

               <AddBuildingForm
                  control={control}
                  errors={errors}
                  watch={watch}
                  cityDropDown={cityDropDown}
                  categoryDropDown={categoryDropDown}
               />

               <ActionsSections primaryTitle={'Valider'} primaryOnPress={handleSubmit(onSubmit)} />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
