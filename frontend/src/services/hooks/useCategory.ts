import { useEffect, useState } from 'react'
import { getCategoryById } from '../api/categories.service'
import { Alert } from 'react-native'
import { Category } from '../../types/category'

export default function useCategory(id: number) {
   const [category, setCategory] = useState<Category | null>(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      loadCategory()
   }, [id])

   const loadCategory = async () => {
      try {
         const data = await getCategoryById(id)
         setCategory(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return { category, isLoading }
}
