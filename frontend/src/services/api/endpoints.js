export const API_BASE_URL = 'http://localhost:8080' // Sur iOS Simulator
// Android Emulator : http://10.0.2.2:8080
// Téléphone réel : http://192.168.x.x:8080 (IP Locale)

export const API_ROUTES = {
   BUILDING: {
      FINDALL: '/building/buildingsdto',
      FIND_BY_ID: (id) => `/building/buildingdto/${id}`,
      FIND_BUILDINGS_BY_CITY: (id) => `/building/buildingsdto/city/${id}`,
      SEARCH_BUILDINGS_BY_CITY: (name) =>
         `/buildingdto/cityname/${encodeURIComponent(name)}`,
   },
   CITY: {
      FINDALL: '/city/cities',
      FIND_BY_ID: (id) => `/city/${id}`,
      DELETE: (id) => `/city/delete/${id}`,
   },
   CATEGORY: {
      FINDALL: '/category/categories',
      FIND_BUILDINGS_BY_CATEGORY: (id) =>
         `/building/buildingsdto/category/${id}`,
   },
}
