import { client } from './client'
import { API_ROUTES } from './endpoints'

export function getCategories() {
   return client(API_ROUTES.CATEGORY.FINDALL)
}

export function getCategoryById(id: number) {
   return client(API_ROUTES.CATEGORY.FIND_BY_ID(id))
}

export function getBuildingsByCategory(id: number) {
   return client(API_ROUTES.CATEGORY.FIND_BUILDINGS_BY_CATEGORY(id))
}
