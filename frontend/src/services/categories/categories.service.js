import { client } from '../api/client'
import { API_ROUTES } from '../api/endpoints'

export async function getCategories() {
   return client(API_ROUTES.CATEGORY.FINDALL)
}

export async function getBuildingsByCategory(id) {
   return client(API_ROUTES.CATEGORY.FIND_BUILDINGS_BY_CATEGORY(id))
}
