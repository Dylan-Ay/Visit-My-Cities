import { View, StyleSheet } from 'react-native'
import { SectionTitle, HorizontalList, CategoryChip } from '../ui'
import { groupCategories } from '../../utils/utils'

export default function CategorySection({ title, data }) {
   const groupedCategories = groupCategories(data)

   return (
      <View style={styles.container}>
         <SectionTitle>{title}</SectionTitle>

         <HorizontalList
            data={groupedCategories}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
               <View>
                  {item.map((cat) => (
                     <CategoryChip key={cat.id} id={cat.id} name={cat.name} icon={cat.icon} />
                  ))}
               </View>
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 16,
   },
})
