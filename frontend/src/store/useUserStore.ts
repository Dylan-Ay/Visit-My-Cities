import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
   username: string | null
   email: string | null
   role: 'ROLE_VISITEUR' | 'ROLE_EXPERT'
}

interface UserState {
   user: User | null
   token: string | null
   setUser: (payload: { user: User; token: string }) => void
   logout: () => void
   isLoggedIn: () => boolean
}

export const useUserStore = create<UserState>()(
   persist(
      (set, get) => ({
         user: null,
         token: null,

         setUser: ({ user, token }) => set({ user, token }),
         logout: () => set(() => ({ user: null, token: null })),
         isLoggedIn: () => !!get().user,
      }),

      {
         name: 'user-storage',
         storage: createJSONStorage(() => AsyncStorage),
      }
   )
)
