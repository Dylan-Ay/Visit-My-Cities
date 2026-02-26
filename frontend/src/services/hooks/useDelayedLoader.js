import { useEffect, useState } from 'react'

export default function useDelayLoader(isLoading) {
   const [showLoader, setShowLoader] = useState(false)

   useEffect(() => {
      if (isLoading) {
         const timeoutId = setTimeout(() => {
            setShowLoader(true)
         }, 250)

         return () => {
            setShowLoader(false)
            clearTimeout(timeoutId)
         }
      }
   }, [isLoading])

   return showLoader
}
