import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { getBuildingById } from '../api/buildings.service'
import { Building } from '../../types/building'

export default function useBuilding(id: number) {
   const [building, setBuilding] = useState<Building | null>(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      loadBuildings()
   }, [id])

   const loadBuildings = async () => {
      try {
         setIsLoading(true)
         const data = await getBuildingById(id)
         setBuilding(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return { building, isLoading }
}
