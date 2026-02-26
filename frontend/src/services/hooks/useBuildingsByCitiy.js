import { useEffect, useState } from 'react'
import { getBuildingsByCity } from '../buildings/buildings.service'
import { Alert } from 'react-native'

export default function useBuildingsByCity(id) {
   const [buildingsByCity, setBuildings] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      loadBuildings()
   }, [])

   const loadBuildings = async () => {
      try {
         setIsLoading(true)
         const data = await getBuildingsByCity(id)
         setBuildings(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return { buildingsByCity, isLoading }
}
