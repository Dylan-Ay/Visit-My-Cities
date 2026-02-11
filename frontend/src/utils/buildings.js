import { KEY_INFO_ICONS } from '../constants/keyInfoIcons'

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
