import { ScrollView, StyleSheet, View } from 'react-native'
import { ContentContainer, FormInput, ScreenWrapper } from '../../components/ui'
import { HeaderSection } from '../../components/sections/HeaderSection'
import AuthActionsSection from '../../components/sections/AuthActionsSection'
import { StackActions } from '@react-navigation/native'

export const RegisterScreen = ({ navigation }) => {
   return (
      <ScreenWrapper>
         <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
         >
            <ContentContainer>
               <HeaderSection
                  title={'Inscription'}
                  subTitle={
                     'Incrivez-vous à Visit My Cities pour avoir accès à davantage de fonctionnalités.'
                  }
               />

               <View style={styles.inputsContainer}>
                  <FormInput
                     label={'Nom et Prénom'}
                     keyboardType={'default'}
                     icon={'close-outline'}
                     returnKeyType={'next'}
                  />
                  <FormInput
                     label={'Adresse email'}
                     keyboardType={'email-address'}
                     icon={'close-outline'}
                     returnKeyType={'next'}
                  />
                  <FormInput
                     label={'Mot de passe'}
                     keyboardType={'default'}
                     icon={'close-outline'}
                     returnKeyType={'send'}
                  />
               </View>

               <AuthActionsSection
                  primaryTitle={'Valider'}
                  primaryOnPress={() =>
                     navigation.navigate('Tabs', { screen: 'Profil' })
                  }
                  secondaryTitle={'Se connecter'}
                  secondaryOnPress={() =>
                     navigation.dispatch(StackActions.replace('LoginScreen'))
                  }
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
