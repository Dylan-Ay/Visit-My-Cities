import { useEffect, useState } from 'react'
import { getBuildingsByCategory } from '../api/categories.service'
import { Alert } from 'react-native'
import { Building } from '../../types/building'

export default function useBuildingsByCategory(id: number) {
   const [buildingsByCategory, setBuildingsByCategory] = useState<Building[]>(
      []
   )
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      loadBuildingsByCategory()
   }, [id])

   const loadBuildingsByCategory = async () => {
      try {
         setIsLoading(true)
         const data = await getBuildingsByCategory(id)
         setBuildingsByCategory(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return { buildingsByCategory, isLoading }
}
