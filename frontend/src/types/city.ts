export type City = {
   id: number
   name: string
   country: string
   description: string | null
   postalCode: string
   image: string
}

export type CreateCityPayload = {
   name: string
   country: string
   description: string | null
   postalCode: string
   image: string
}
