import { API_BASE_URL } from './endpoints'

export async function client(path, options = {}) {
   const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
         'Content-Type': 'application/json',
      },
   })

   if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Une erreur est survenue.')
   }

   if (response.status === 204) {
      return null
   }

   return await response.json()
}
