import { View } from 'react-native'
import { SectionTitle, CategoryButton, PlacesCarousel } from '../ui'
import { groupCategories } from '../../utils/utils'
import { Category } from '../../types/category'
import { RootStackParamList } from '../../navigation/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface CategorySectionProps {
   navigation: NativeStackNavigationProp<RootStackParamList, 'CategoryDetail'>
   data: Category[]
   title: string
}

export default function CategorySection({ navigation, data, title }: CategorySectionProps) {
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
                        onPress={() =>
                           navigation.navigate('CategoryDetail', {
                              categoryId: cat.id,
                           })
                        }
                     />
                  ))}
               </View>
            )}
         />
      </View>
   )
}
