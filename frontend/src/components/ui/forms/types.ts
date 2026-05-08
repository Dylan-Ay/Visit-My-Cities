import { CreateBuildingPayload, TimeSlot } from '../../../types/building'

export type FormsValues = CreateBuildingPayload & {
   schedules: {
      sameForAllDays?: boolean
      globalStart?: TimeSlot
      globalEnd?: TimeSlot
   }
}

export type PlacesDropDown = {
   label: string
   value: string | number
}
