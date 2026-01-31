import { View } from 'react-native'
import { SectionTitle, CategoryButton, PlacesCarousel } from '../ui'
import { groupCategories } from '../../utils/utils'

export default function CategorySection({ title, data }) {
   const groupedCategories = groupCategories(data)

   return (
      <View>
         <SectionTitle>{title}</SectionTitle>

         <PlacesCarousel
            data={groupedCategories}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
               <View>
                  {item.map((cat) => (
                     <CategoryButton
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        icon={cat.icon}
                     />
                  ))}
               </View>
            )}
         />
      </View>
   )
}
