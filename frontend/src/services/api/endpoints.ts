export const API_BASE_URL: string = process.env.EXPO_PUBLIC_API_URL_IOS_SIMULATOR
export const API_ROUTES = {
   AUTH: {
      REGISTER: '/auth/register',
      LOGIN: '/auth/login',
   },
   BUILDING: {
      FINDALL: '/buildings',
      FIND_BY_ID: (id: number) => `/buildings/${id}`,
      FIND_BUILDINGS_BY_CITY: (id: number) => `/buildings/city/${id}`,
      FIND_BUILDINGS_BY_CATEGORY: (id: number) => `/buildings/category/${id}`,
      ADD_BUILDING: `/buildings`,
   },
   CITY: {
      FINDALL: '/cities',
      FIND_BY_ID: (id: number) => `/cities/${id}`,
      FIND_BY_NAME: (name: string) => `/cities/search?name=${name}`,
      ADD_CITY: '/cities',
      UPDATE_CITY: (id: number) => `/cities/${id}`,
      DELETE_CITY: (id: number) => `/cities/${id}`,
   },
   CATEGORY: {
      FINDALL: '/categories',
      FIND_BY_ID: (id: number) => `/categories/${id}`,
   },
}
