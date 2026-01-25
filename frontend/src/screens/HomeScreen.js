import { ImageBackground, StyleSheet, Text } from "react-native"
import { ScreenWrapper, SearchInput, FullWidthComponent } from "../components/ui"
import PopularSection from "../components/sections/PopularSection"

// Exemple de données
const cities = [
  { id: '1', name: 'Paris', image: 'https://www.secretdeparis.com/blog/wp-content/uploads/2025/04/eiffel-tower-975004_1280.jpg' },
  { id: '2', name: 'Tokyo', image: 'https://cdn-blog.superprof.com/blog_fr/wp-content/uploads/2018/03/palais-imperial-tokyo.jpg' },
  { id: '3', name: 'New York', image: 'https://cdn-imgix.headout.com/tour/30357/TOUR-IMAGE/6cdcf542-452d-4897-beed-76cf68f154e4-1act-de005e04-05d9-4715-96b0-6a089d5c3460.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop' },
  { id: '4', name: 'Londres', image: 'https://media.clondres.com/resize/uploads/sites/5/2018/03/big-ben-londres-696x478.jpg?format=auto' },
  { id: '5', name: 'Rome', image: 'https://www.webcity.fr/wp-content/uploads/2017/11/monument-rome-1.jpg' },
  { id: '6', name: 'Barcelone', image: 'https://jacheteenespagne.com/wp-content/uploads/2024/06/0bda496746574de3ac1ec5c68616272b-1.jpg' },
];

export const HomeScreen = ({ navigation }) => {
   return (
      <ScreenWrapper useEdges={false}>
         <FullWidthComponent>
            <ImageBackground
            source={require('../../assets/HomeScreenBanner.png')}
            style={styles.banner}
            >
               <Text style={styles.bannerText}>Découvrez les bâtiments du monde entier !</Text>
            </ImageBackground>
         </FullWidthComponent>
      
         <SearchInput placeholder={"Rechercher une ville"}></SearchInput>
      
         <PopularSection cities={cities} />
      </ScreenWrapper>
   )
}

const styles = StyleSheet.create({
   banner: {
      height: 280,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 16
   },
   
   bannerContainer: {
      gap: 12,
      width: '100%'
   },
   
   bannerText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10
   }
})