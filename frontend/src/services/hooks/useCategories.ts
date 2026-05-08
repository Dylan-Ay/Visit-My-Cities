import { useEffect, useState } from 'react'
import { getCategories } from '../api/categories.service'
import { Alert } from 'react-native'
import { Category } from '../../types/category'

export default function useCategories() {
   const [categories, setCategories] = useState<Category[]>([])
   const [isLoadingCat, setLoadingCat] = useState(false)

   useEffect(() => {
      loadCategories()
   }, [])

   const loadCategories = async () => {
      try {
         setLoadingCat(true)
         const data = await getCategories()
         setCategories(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setLoadingCat(false)
      }
   }

   return { categories, isLoadingCat }
}
