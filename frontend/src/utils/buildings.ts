import { KEY_INFO_ICONS } from '../constants/keyInfoIcons'
import { VISIT_INFO_ICONS } from '../constants/visitInfoIcons'
import { Building, BuildingInfos, TimeSlot, WeekDay } from '../types/building'

export const getBuildingKeyInfos = (building: Building): BuildingInfos[] => {
   const buildingKeyInfos = [
      {
         label: 'Ville',
         icon: KEY_INFO_ICONS.city,
         value: `${building.city ?? 'Ville non renseignée'}, ${building.country ?? 'Pays non renseigné'}`,
      },
      {
         label: 'Année',
         icon: KEY_INFO_ICONS.year,
         value: building.constructionYear ?? 'Non renseigné',
      },
      {
         label: 'Architecte',
         icon: KEY_INFO_ICONS.architect,
         value: building.architect ?? 'Non renseigné',
      },
      {
         label: 'Style architectural',
         icon: KEY_INFO_ICONS.style,
         value: building.style ?? 'Non renseigné',
      },
   ]

   return buildingKeyInfos
}

export const getBuildingVisitInfos = (building: Building): BuildingInfos[] => {
   const buildingVisitInfos = [
      {
         label: 'Tarif',
         icon: VISIT_INFO_ICONS.price,
         value:
            building.ticketPrice == null
               ? 'Non renseigné'
               : building.ticketPrice === 0
                 ? 'Gratuit'
                 : `${building.ticketPrice}€`,
      },
      {
         label: 'Temps de visite',
         icon: VISIT_INFO_ICONS.time,
         value: building.visitDuration ?? 'Non renseigné',
      },
      {
         label: 'Statut',
         icon: VISIT_INFO_ICONS.status,
         value: building.accessStatus ?? 'Non renseigné',
      },
      {
         label: 'Accessibilité',
         icon: VISIT_INFO_ICONS.accessibility,
         value:
            building.accessiblePRM == null
               ? 'Non renseigné'
               : building.accessiblePRM == true
                 ? 'Accessible'
                 : 'Non accessible',
      },
      {
         label: 'Réservation',
         icon: VISIT_INFO_ICONS.ticket,
         value: building.booking ?? 'Non renseigné',
      },
   ]

   return buildingVisitInfos
}

export const orderDaysProperly = (
   schedulesDays: Record<WeekDay, TimeSlot[]>
) => {
   const orderedDays: Record<WeekDay, number> = {
      lundi: 0,
      mardi: 1,
      mercredi: 2,
      jeudi: 3,
      vendredi: 4,
      samedi: 5,
      dimanche: 6,
   }

   const sortedDays = Object.fromEntries(
      (Object.entries(schedulesDays) as [WeekDay, TimeSlot[]][]).sort(
         (a, b) => orderedDays[a[0]] - orderedDays[b[0]]
      )
   ) as Record<WeekDay, TimeSlot[]>

   return sortedDays
}
