export const API_BASE_URL: string =
   process.env.EXPO_PUBLIC_API_URL_IOS_SIMULATOR ??
   process.env.EXPO_PUBLIC_API_URL_TELEPHONE ??
   process.env.EXPO_PUBLIC_API_URL_ANDROID_EMULATOR

export const API_ROUTES = {
   AUTH: {
      REGISTER: '/auth/register',
      LOGIN: '/auth/login',
   },
   BUILDING: {
      FINDALL: '/building/buildingsdto',
      FIND_BY_ID: (id: number) => `/building/buildingdto/${id}`,
      FIND_BUILDINGS_BY_CITY: (id: number) => `/building/buildingsdto/city/${id}`,
      SEARCH_BUILDINGS_BY_CITY: (name: string) =>
         `/buildingdto/cityname/${encodeURIComponent(name)}`,
      ADD_BUILDING: `/building/add/add`,
   },
   CITY: {
      FINDALL: '/city/cities',
      FIND_BY_ID: (id: number) => `/city/${id}`,
      DELETE: (id: number) => `/city/delete/${id}`,
   },
   CATEGORY: {
      FINDALL: '/category/categories',
      FIND_BY_ID: (id: number) => `/category/${id}`,
      FIND_BUILDINGS_BY_CATEGORY: (id: number) => `/building/buildingsdto/category/${id}`,
   },
}
