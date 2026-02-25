import { client } from '../api/client'
import { API_ROUTES } from '../api/endpoints'

export async function getBuildings() {
   return client(API_ROUTES.BUILDING.FINDALL)
}

export async function getBuildingById(id) {
   return client(API_ROUTES.BUILDING.FIND_BY_ID(id))
}

export async function getBuildingsByCity(id) {
   return client(API_ROUTES.BUILDING.FIND_BUILDINGS_BY_CITY(id))
}

export async function searchBuildingsByCity(id) {
   return client(API_ROUTES.BUILDING.SEARCH_BUILDINGS_BY_CITY(id))
}
