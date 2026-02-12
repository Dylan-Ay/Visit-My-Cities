import { KEY_INFO_ICONS } from '../constants/keyInfoIcons'
import { VISIT_INFO_ICONS } from '../constants/visitInfoIcons'

export const getBuildingKeyInfos = (building) => {
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

export const getBuildingVisitInfos = (building) => {
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
         label: building.isVisitable ? 'Réservation' : 'Statut',
         icon: building.isVisitable
            ? VISIT_INFO_ICONS.ticket
            : VISIT_INFO_ICONS.status,
         value: !building.isVisitable
            ? 'Accès libre'
            : building.booking == null
              ? 'Non renseigné'
              : building.booking,
      },
      {
         label: 'Accessibilité',
         icon: VISIT_INFO_ICONS.accessibility,
         value: building.accessiblePRM ? 'Accessible' : 'Non accessible',
      },
   ]

   return buildingVisitInfos
}
