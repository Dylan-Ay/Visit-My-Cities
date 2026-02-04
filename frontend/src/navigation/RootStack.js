import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import { CityDetailScreen } from '../screens/stack/CityDetailScreen'
import { BuildingDetailScreen } from '../screens/stack/BuildingDetailScreen'

const Stack = createStackNavigator()

export default function RootStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="CityDetail" component={CityDetailScreen} />
         <Stack.Screen name="BuildingDetail" component={BuildingDetailScreen} />
      </Stack.Navigator>
   )
}
