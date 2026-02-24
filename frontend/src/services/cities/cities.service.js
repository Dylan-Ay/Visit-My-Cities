import { client } from '../api/client'
import { API_ROUTES } from '../api/endpoints'

export async function getCities() {
   return await client(API_ROUTES.CITY.FINDALL)
}

export async function getCityById(id) {
   return await client(API_ROUTES.CITY.FIND_BY_ID(id))
}

export async function deleteCity(id) {
   return await client(API_ROUTES.CITY.DELETE(id), {
      method: 'DELETE',
   })
}
