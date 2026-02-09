// prettier-ignore
import { ScrollView, StyleSheet, Text, View, } from 'react-native'
// prettier-ignore
import { ContentContainer, HeroBanner, ScreenWrapper, SectionTitle, SectionDivider } from '../../components/ui'
import { buildings } from '../../services/data'
import { Ionicons } from '@expo/vector-icons'
import KeyInfosSection from '../../components/sections/KeyInfosSection/KeyInfosSection'
import DescriptionSection from '../../components/sections/DescriptionSection'

export const BuildingDetailScreen = ({ navigation, route }) => {
   const { buildingId } = route.params
   const building = buildings.find((element) => element.id == buildingId)

   return (
      <ScreenWrapper useEdges={false}>
         <ScrollView>
            <HeroBanner title={building.name} image={{ uri: building.image }} />

            <ContentContainer style={{ paddingBottom: 20 }}>
               <KeyInfosSection building={building} />

               <SectionDivider />

               <DescriptionSection
                  text={
                     "Construite pour l'Exposition universelle de 1889, la Tour Eiffel est l'un des monuments les plus emblématiques de Paris et de la France. Imaginée par l'ingénieur Gustave Eiffel, elle devait initialement être une installation temporaire destinée à démontrer le savoir-faire industriel français de la fin du XIXᵉ siècle. Avec ses 324 mètres de hauteur, la tour a longtemps été la plus haute structure du monde. Entièrement composée de fer puddlé, elle incarne l'architecture industrielle et l'audace technique de son époque. Malgré de nombreuses critiques lors de sa construction, elle est rapidement devenue un symbole universel de modernité et d'innovation. Aujourd'hui, la Tour Eiffel attire des millions de visiteurs chaque année. Accessible à différents niveaux, elle offre des points de vue spectaculaires sur Paris et demeure un repère incontournable du paysage urbain parisien."
                  }
                  // onPress={() => onPress}
               />

               <SectionDivider />

               <SectionTitle style={{ fontSize: 22 }}>
                  Informations de Visite
               </SectionTitle>
               <View
                  style={{
                     gap: 12,
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                  }}
               >
                  <View
                     style={{
                        flexDirection: 'row',
                        gap: 6,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        borderRadius: 16,
                        padding: 8,
                        shadowColor: '#000',
                        shadowOffset: {
                           width: 0,
                           height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                        width: '48%',
                     }}
                  >
                     <Ionicons style={styles.icon} name="time-outline" />
                     <View style={{ gap: 4 }}>
                        <Text style={{ fontWeight: 600 }}>Horaires</Text>
                        <Text>9:30 - 22:45</Text>
                     </View>
                  </View>

                  <View
                     style={{
                        flexDirection: 'row',
                        gap: 6,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        borderRadius: 16,
                        padding: 8,
                        shadowColor: '#000',
                        shadowOffset: {
                           width: 0,
                           height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                        width: '48%',
                     }}
                  >
                     <Ionicons style={styles.icon} name="pricetag-outline" />
                     <View style={{ gap: 4 }}>
                        <Text style={{ fontWeight: 600 }}>Tarifs</Text>
                        <Text>A partir de 11€</Text>
                     </View>
                  </View>

                  <View
                     style={{
                        flexDirection: 'row',
                        gap: 6,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        borderRadius: 16,
                        padding: 8,
                        shadowColor: '#000',
                        shadowOffset: {
                           width: 0,
                           height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                        width: '48%',
                     }}
                  >
                     <Ionicons
                        style={styles.icon}
                        name="checkmark-circle-outline"
                     />
                     <View style={{ gap: 4 }}>
                        <Text style={{ fontWeight: 600 }}>Statut</Text>
                        <Text>Accès public</Text>
                     </View>
                  </View>

                  <View
                     style={{
                        flexDirection: 'row',
                        gap: 6,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        borderRadius: 16,
                        padding: 8,
                        shadowColor: '#000',
                        shadowOffset: {
                           width: 0,
                           height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                        width: '48%',
                     }}
                  >
                     <Ionicons
                        style={styles.icon}
                        name="accessibility-outline"
                     />
                     <View style={{ gap: 4 }}>
                        <Text style={{ fontWeight: 600 }}>Accès</Text>
                        <Text>Accessible</Text>
                     </View>
                  </View>
               </View>
            </ContentContainer>
            {/* Map localisation */}
         </ScrollView>
      </ScreenWrapper>
   )
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 16,
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      marginBottom: 28,
   },
   container2: {
      borderRadius: 16,
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      marginBottom: 28,
   },
   keysInfosContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      gap: 6,
   },
   icon: {
      fontSize: 22,
   },
})
