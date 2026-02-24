import { client } from '../api/client'
import { API_ROUTES } from '../api/endpoints'

export async function getCategories() {
   return await client(API_ROUTES.CATEGORY.FINDALL)
}

export async function getBuildingsByCategory(id) {
   return await client(API_ROUTES.CATEGORY.FIND_BUILDINGS_BY_CATEGORY(id))
}
