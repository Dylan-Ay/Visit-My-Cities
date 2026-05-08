import { View } from 'react-native'
import { SectionTitle, CategoryButton, PlacesCarousel } from '../ui'
import { groupCategories } from '../../utils/utils'
import { Category } from '../../types/category'

interface CategorySectionProps {
   data: Category[]
   title: string
   onPress: (id: number) => void
}

export default function CategorySection({ data, title, onPress }: CategorySectionProps) {
   const groupedCategories = groupCategories(data ?? [])

   return (
      <View>
         <SectionTitle>{title}</SectionTitle>

         <PlacesCarousel
            data={groupedCategories}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
               <View>
                  {item.map((cat) => (
                     <CategoryButton
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        icon={cat.icon}
                        onPress={() => onPress(cat.id)}
                     />
                  ))}
               </View>
            )}
         />
      </View>
   )
}
