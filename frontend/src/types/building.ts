export type Coords = {
   latitude: number
   longitude: number
   latitudeDelta: number
   longitudeDelta: number
}

export type TimeSlot = {
   start: string
   end: string
}

export type WeekDay =
   | 'lundi'
   | 'mardi'
   | 'mercredi'
   | 'jeudi'
   | 'vendredi'
   | 'samedi'
   | 'dimanche'

export type Schedules = {
   type: 'Variable' | 'Horaires' | 'Accès libre'
   note: string
   officialHoursUrl: string
   days: Record<WeekDay, TimeSlot[]>
}

export type Building = {
   id: number
   cityId: number
   city: string

   accessStatus: 'Visitable' | 'Accès libre' | 'Accès restreint'
   accessiblePRM: boolean
   address: string
   architect: string
   booking: 'Recommandée' | 'Obligatoire' | 'Non requis'

   constructionYear: number

   coords: Coords
   schedules: Schedules

   country: string
   description: string
   image: string
   name: string
   postalCode: string
   style: string
   ticketPrice: number
   visitDuration: string
}

export type BuildingInfos = {
   label: string
   icon: string
   value: string | number
}

export type CreateBuildingPayload = {
   name: string
   address: string
   postalCode: string

   cityId: number
   categoryId: number
   image: string

   constructionYear: number
   architect: string
   style: string
   description: string

   ticketPrice: number
   visitDuration: string
   booking: 'Recommandée' | 'Obligatoire' | 'Non requis'
   accessStatus: 'Visitable' | 'Accès libre' | 'Accès restreint'
   accessiblePRM: boolean

   schedules: Schedules

   coords: Coords
}
