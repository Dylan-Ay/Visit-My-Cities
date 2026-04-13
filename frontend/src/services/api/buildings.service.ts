import { CreateBuildingPayload } from '../../types/building'
import { client } from './client'
import { API_ROUTES } from './endpoints'

export function getBuildings() {
   return client(API_ROUTES.BUILDING.FINDALL)
}

export function getBuildingById(id: number) {
   return client(API_ROUTES.BUILDING.FIND_BY_ID(id))
}

export function getBuildingsByCity(id: number) {
   return client(API_ROUTES.BUILDING.FIND_BUILDINGS_BY_CITY(id))
}

export function searchBuildingsByCity(id: string) {
   return client(API_ROUTES.BUILDING.SEARCH_BUILDINGS_BY_CITY(id))
}

export function addBuilding(data: CreateBuildingPayload) {
   return client(API_ROUTES.BUILDING.ADD_BUILDING, {
      method: 'POST',
      body: JSON.stringify(data),
   })
}
