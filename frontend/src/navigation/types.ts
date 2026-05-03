import { NavigatorScreenParams } from '@react-navigation/native'

export type TabsParamList = {
   Home: undefined
   Explorer: undefined
   Visit: undefined
   Add: undefined
   Profile: undefined
}

export type RootStackParamList = {
   Tabs: NavigatorScreenParams<TabsParamList>
   Login: undefined
   Register: undefined
   BuildingDetail: { buildingId: number }
   CityDetail: { cityId: number }
   CategoryDetail: { categoryId: number }
}
