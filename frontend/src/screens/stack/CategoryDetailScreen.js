import { HeaderTitle, ScreenWrapper } from '../../components/ui'
import { categories } from '../../services/data'

export const CategoryDetailScreen = ({ route }) => {
   const { categoryId } = route.params
   const category = categories.find((element) => element.id == categoryId)

   return (
      <ScreenWrapper>
         <HeaderTitle>Bâtiments de la catégorie: {category.name}</HeaderTitle>
      </ScreenWrapper>
   )
}
