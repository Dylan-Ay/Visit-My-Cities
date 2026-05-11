import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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

export type ExplorerTab = CompositeNavigationProp<
   BottomTabNavigationProp<TabsParamList, 'Explorer'>,
   NativeStackNavigationProp<RootStackParamList>
>

export type HomeTab = CompositeNavigationProp<
   BottomTabNavigationProp<TabsParamList, 'Home'>,
   NativeStackNavigationProp<RootStackParamList>
>

export type ProfileTab = CompositeNavigationProp<
   BottomTabNavigationProp<TabsParamList, 'Profile'>,
   NativeStackNavigationProp<RootStackParamList>
>

export type VisitTab = CompositeNavigationProp<
   BottomTabNavigationProp<TabsParamList, 'Visit'>,
   NativeStackNavigationProp<RootStackParamList>
>
