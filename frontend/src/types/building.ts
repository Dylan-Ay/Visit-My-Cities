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
   type: string
   note: string
   officialHoursUrl: string
   days: Record<WeekDay, TimeSlot[]>
}

export type Building = {
   id: number
   cityId: number
   city: string

   accessStatus: string
   accessiblePRM: boolean
   address: string
   architect: string
   booking: string

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
