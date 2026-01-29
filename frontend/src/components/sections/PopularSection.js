import { View, StyleSheet } from 'react-native'
import { SectionTitle, HorizontalList } from '../ui'

export default function PopularSection({ title, data, renderItem }) {
   return (
      <View style={styles.container}>
         <SectionTitle>{title}</SectionTitle>

         <HorizontalList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 20,
   },
})
