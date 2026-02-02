import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function StackNavigator() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="CityDetail" component={CityDetailScreen} />
         <Stack.Screen name="BuildingDetail" component={BuildingDetailScreen} />
      </Stack.Navigator>
   )
}
