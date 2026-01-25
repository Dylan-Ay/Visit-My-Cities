import { ImageBackground, StyleSheet, View, Text } from "react-native"
import { ScreenWrapper } from "../components"
import SearchInput from "../components/SearchInput";
import { SectionTitle } from "../components/SectionTitle";
import { FullWidthComponent } from "../components/FullWidthComponent";

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

      <View>
         <SearchInput placeholder={"Rechercher une ville"}></SearchInput>
            
      </View>
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