import { client } from './client'
import { API_ROUTES } from './endpoints'

export function getCities() {
   return client(API_ROUTES.CITY.FINDALL)
}

export function getCityById(id: number) {
   return client(API_ROUTES.CITY.FIND_BY_ID(id))
}

export function deleteCity(id: number) {
   return client(API_ROUTES.CITY.DELETE(id), {
      method: 'DELETE',
   })
}
