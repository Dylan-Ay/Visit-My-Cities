import { useEffect, useState } from 'react'
import { getBuildings } from '../buildings/buildings.service'
import { Alert } from 'react-native'

export default function useBuildings() {
   const [buildings, setBuildings] = useState([])
   const [isLoading, setLoading] = useState(true)

   useEffect(() => {
      loadBuildings()
   }, [])

   const loadBuildings = async () => {
      try {
         setLoading(true)
         const data = await getBuildings()
         setBuildings(data)
      } catch (error) {
         Alert.alert('Une erreur est survenue')
         console.log(error)
      } finally {
         setLoading(false)
      }
   }

   return { buildings, isLoading }
}
