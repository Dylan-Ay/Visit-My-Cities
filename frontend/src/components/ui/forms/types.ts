import { CreateBuildingPayload } from '../../../types/building'

export type FormsValues = CreateBuildingPayload & {
   schedules: {
      sameForAllDays?: boolean
      globalStart?: string
      globalEnd?: string
   }
}

export type PlacesDropDown = {
   label: string
   value: string | number
}
