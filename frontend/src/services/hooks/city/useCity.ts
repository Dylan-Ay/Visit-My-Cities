import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { getCityById } from '../../api/cities.service'
import { City } from '../../../types/city'

export default function useCity(id: number) {
   const [city, setCity] = useState<City | null>(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      loadBuildings()
   }, [id])

   const loadBuildings = async () => {
      try {
         setIsLoading(true)
         const data = await getCityById(id)
         setCity(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return { city, isLoading }
}
