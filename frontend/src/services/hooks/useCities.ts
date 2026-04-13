import { useEffect, useState } from 'react'
import { getCities } from '../api/cities.service'
import { Alert } from 'react-native'
import { City } from '../../types/city'

export default function useCities() {
   const [cities, setCities] = useState<City[] | null>(null)
   const [isLoadingCity, setLoadingCity] = useState(false)

   useEffect(() => {
      loadCities()
   }, [])

   const loadCities = async () => {
      try {
         setLoadingCity(true)
         const data = await getCities()
         setCities(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setLoadingCity(false)
      }
   }

   return { cities, isLoadingCity }
}
