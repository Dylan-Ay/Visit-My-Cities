import { CreateBuildingPayload } from '../../types/building'
import { addBuilding } from '../api/buildings.service'
import { useState } from 'react'

export function useAddBuilding() {
   const [isLoadingBuild, setLoadingBuild] = useState(false)

   const addBuildingHandler = async (data: CreateBuildingPayload) => {
      try {
         setLoadingBuild(true)
         const result = await addBuilding(data)
         return result
      } catch (error) {
         console.log(error)
      } finally {
         setLoadingBuild(false)
      }
   }

   return { addBuildingHandler, isLoadingBuild }
}
