import { ScrollView } from 'react-native'
import {
   ScreenWrapper,
   ContentContainer,
   AddBuildingForm,
} from '../../components/ui'
import { HeaderSection } from '../../components/sections/HeaderSection'
import ActionsSections from '../../components/sections/ActionsSections'
import { useMemo } from 'react'
import useCities from '../../services/hooks/useCities'
import useCategories from '../../services/hooks/useCategories'
import { Loader } from '../../components/ui/Loader'
import useDelayLoader from '../../services/hooks/useDelayedLoader'
import { useForm } from 'react-hook-form'
import { addBuildingDefaultValues } from '../config/addBuildingDefaultValues'

export const AddScreen = ({ navigation }) => {
   const { cities, isLoadingCity } = useCities()
   const { categories, isLoadingCat } = useCategories()

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
      defaultValues: addBuildingDefaultValues,
   })

   const isLoadingGlobal = isLoadingCity || isLoadingCat
   const showGlobalLoader = useDelayLoader(isLoadingGlobal)

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

               <AddBuildingForm
                  control={control}
                  cityDropDown={cityDropDown}
                  categoryDropDown={categoryDropDown}
               />

               <ActionsSections
                  primaryTitle={'Valider'}
                  primaryOnPress={handleSubmit}
               />
            </ContentContainer>
         </ScrollView>
      </ScreenWrapper>
   )
}
