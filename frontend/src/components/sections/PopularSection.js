import { View, StyleSheet } from "react-native"
import { SectionTitle, HorizontalList, CityCard } from "../ui"

export default function PopularSection ({ cities }) {
   return (
      <View style={styles.container}>
         <SectionTitle>Villes populaires</SectionTitle>

         <HorizontalList
            data={cities}
            renderItem={({ item }) => (
               <CityCard city={item} />
            )}
            keyExtractor={(item) => item.id}
         />
      </View>
  );
}

const styles = StyleSheet.create({
   container: {
      paddingVertical: 24
   }
})