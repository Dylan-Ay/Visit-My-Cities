import { useEffect, useState } from 'react'
import { getCities } from '../cities/cities.service'
import { Alert } from 'react-native'

export default function useCities() {
   const [cities, setCities] = useState([])
   const [isLoading, setLoading] = useState(true)

   useEffect(() => {
      loadCities()
   }, [])

   const loadCities = async () => {
      try {
         setLoading(true)
         const data = await getCities()
         setCities(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setLoading(false)
      }
   }

   return { cities, isLoading }
}
