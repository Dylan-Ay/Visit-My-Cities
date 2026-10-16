import { CreateCityPayload } from '../../types/city'
import { client } from './client'
import { API_ROUTES } from './endpoints'

export function getCities() {
   return client(API_ROUTES.CITY.FINDALL)
}

export function getCityById(id: number) {
   return client(API_ROUTES.CITY.FIND_BY_ID(id))
}

export function getCityByName(name: string) {
   return client(API_ROUTES.CITY.FIND_BY_NAME(name))
}

export function addCity(data: CreateCityPayload) {
   return client(API_ROUTES.CITY.ADD_CITY, {
      method: 'POST',
      body: JSON.stringify(data),
   })
}

export function deleteCity(id: number) {
   return client(API_ROUTES.CITY.DELETE_CITY(id), {
      method: 'DELETE',
   })
}

export function updateCity(id: number, data: CreateCityPayload) {
   return client(API_ROUTES.CITY.UPDATE_CITY(id), {
      method: 'PUT',
      body: JSON.stringify(data),
   })
}
