import { Image } from 'react-native'
import {
   ContentContainer,
   ScreenWrapper,
   SectionDivider,
} from '../../components/ui'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import AuthActionsSection from '../../components/sections/AuthActionsSection'
import { useUserStore } from '../../store/useUserStore'
import { removeAccessToken } from '../../auth/tokenStorage'

export const ProfileScreen = ({ navigation }) => {
   const userIsLoggedIn = useUserStore((state) => state.isLoggedIn())

   const handleLogout = async () => {
      await removeAccessToken()
      useUserStore.getState().logout()

      navigation.navigate('Accueil')
   }

   return (
      <ScreenWrapper>
         <ContentContainer>
            <View style={styles.container}>
               <Image
                  source={require('../../../assets/WelcomeProfileScreen.png')}
                  style={styles.img}
               />
               <Text style={styles.title}>Bienvenue sur Visit My Cities</Text>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>
                     Visit My Cities vous permet de découvrir les différents
                     bâtiments et monuments du monde entier. Vous allez avoir
                     accès à des informations détaillées sur chaque bâtiment
                     d'une ville.
                  </Text>
                  <Text style={styles.text}>
                     Vous avez la possibilité de planifier vos voyages à
                     l'avance par ville, grâce à votre liste de favoris.
                  </Text>
               </View>
               <SectionDivider style={{ width: '100%', marginBottom: 28 }} />

               <AuthActionsSection
                  isLoggedIn={userIsLoggedIn}
                  primaryTitle={!userIsLoggedIn ? 'Connexion' : 'Déconnexion'}
                  primaryOnPress={
                     !userIsLoggedIn
                        ? () => navigation.navigate('LoginScreen')
                        : handleLogout
                  }
                  secondaryTitle={!userIsLoggedIn && 'Créer un compte'}
                  secondaryOnPress={
                     !userIsLoggedIn
                        ? () => navigation.navigate('RegisterScreen')
                        : null
                  }
               />
            </View>
         </ContentContainer>
      </ScreenWrapper>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
   },
   img: {
      width: '100%',
      height: 300,
      borderRadius: 10,
   },
   title: {
      fontWeight: 700,
      fontSize: 24,
      paddingTop: 20,
      paddingBottom: 14,
      textAlign: 'center',
   },
   textContainer: {
      gap: 16,
   },
   text: {
      color: '#6B7280',
      textAlign: 'center',
      fontSize: 16,
   },
})
