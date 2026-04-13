import { client } from './client'
import { API_ROUTES } from './endpoints'
import { saveAccessToken } from '../../auth/tokenStorage'

export async function login(email: string, password: string) {
   const data = await client(API_ROUTES.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
   })

   await saveAccessToken(data.access_token)
   return data
}

export function register(username: string, email: string, password: string) {
   return client(API_ROUTES.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
   })
}
