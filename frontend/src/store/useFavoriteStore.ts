import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface FavoriteState {
   favoriteCities: number[]
   favoriteBuildings: number[]
   toggleFavoriteCity: (id: number) => void
   toggleFavoriteBuilding: (id: number) => void
   isFavoriteCity: (id: number) => boolean
   isFavoriteBuilding: (id: number) => boolean
   resetStorage: () => void
}

export const useFavoriteStore = create<FavoriteState>()(
   persist(
      (set, get) => ({
         favoriteCities: [],
         favoriteBuildings: [],

         toggleFavoriteCity: (id: number) =>
            set((state) => {
               if (!state.favoriteCities.includes(id)) {
                  return {
                     favoriteCities: [...state.favoriteCities, id],
                  }
               }

               const newFavoriteCities = state.favoriteCities.filter((el) => el !== id)
               return {
                  favoriteCities: newFavoriteCities,
               }
            }),
         toggleFavoriteBuilding: (id: number) =>
            set((state) => {
               if (!state.favoriteBuildings.includes(id)) {
                  return {
                     favoriteBuildings: [...state.favoriteBuildings, id],
                  }
               }

               const newFavoriteBuildings = state.favoriteBuildings.filter((el) => el !== id)
               return {
                  favoriteBuildings: newFavoriteBuildings,
               }
            }),
         resetStorage: () =>
            set({
               favoriteCities: [],
               favoriteBuildings: [],
            }),
         isFavoriteCity: (id: number) => get().favoriteCities.includes(id),
         isFavoriteBuilding: (id: number) => get().favoriteBuildings.includes(id),
      }),

      {
         name: 'favorites-storage',
         storage: createJSONStorage(() => AsyncStorage),
      }
   )
)
