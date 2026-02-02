import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function StackNavigator() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="City" component={CityDetailScreen} />
         <Stack.Screen name="Building" component={BuildingDetailScreen} />
      </Stack.Navigator>
   )
}
