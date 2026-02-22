import { ScrollView, StyleSheet } from 'react-native'
import { ContentContainer, FormInput, ScreenWrapper } from '../../components/ui'
import { View } from 'react-native'
import AuthActionsSection from '../../components/sections/AuthActionsSection'
import { HeaderSection } from '../../components/sections/HeaderSection'

export const LoginScreen = ({ navigation }) => {
   return (
      <ScreenWrapper>
         <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
         >
            <ContentContainer>
               <HeaderSection
                  title={'Connexion'}
                  subTitle={'Connectez-vous à Visit My Cities'}
               />

               <View style={styles.inputsContainer}>
                  <FormInput
                     label={'Adresse email'}
                     placeholder={'Insérez votre adresse email'}
                     keyboardType={'email-address'}
                     icon={'close-outline'}
                     returnKeyType={'next'}
                  />
                  <FormInput
                     label={'Mot de passe'}
                     placeholder={'Insérez votre mot de passe'}
                     keyboardType={'default'}
                     secureTextEntry={true}
                     icon={'close-outline'}
                     returnKeyType={'send'}
                  />
               </View>

               <AuthActionsSection
                  primaryTitle={'Se Connecter'}
                  primaryOnPress={() =>
                     navigation.navigate('Tabs', { screen: 'Profil' })
                  }
                  secondaryTitle={'Créer un compte'}
                  secondaryOnPress={() => navigation.navigate('RegisterScreen')}
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
