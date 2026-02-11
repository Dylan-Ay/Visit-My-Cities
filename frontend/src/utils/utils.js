import { KEY_INFO_ICONS } from '../constants/keyInfoIcons'

export const groupCategories = (categories) => {
   const result = []

   for (let i = 0; i < categories.length; i += 2) {
      result.push(categories.slice(i, i + 2))
   }

   return result
}

export const divideOddsAndEvens = (items) => {
   const leftColumn = []
   const rightColumn = []

   for (let i = 0; i < items.length; i++) {
      if (i % 2 == 0) {
         leftColumn.push(items[i])
      } else {
         rightColumn.push(items[i])
      }
   }

   return { leftColumn, rightColumn }
}

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
