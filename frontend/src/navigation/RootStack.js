import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import { CityDetailScreen } from '../screens/stack/CityDetailScreen'
import { BuildingDetailScreen } from '../screens/stack/BuildingDetailScreen'
import { CategoryDetailScreen } from '../screens/stack/CategoryDetailScreen'
import { HeaderIconButton } from '../components/ui/inputs/HeaderIconButton'

const Stack = createStackNavigator()

export default function RootStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="CityDetail"
            component={CityDetailScreen}
            options={({ navigation }) => ({
               headerTransparent: true,
               headerTitle: '',
               headerLeft: () => (
                  <HeaderIconButton
                     icon={'chevron-back-outline'}
                     style={{ marginLeft: 16 }}
                     onPress={() => navigation.goBack()}
                  />
               ),
               headerRight: () => (
                  <HeaderIconButton
                     icon={'heart-outline'}
                     style={{ marginRight: 16 }}
                  />
               ),
            })}
         />
         <Stack.Screen
            name="BuildingDetail"
            component={BuildingDetailScreen}
            options={() => ({
               headerTransparent: true,
               headerTitle: '',
               headerLeft: () => (
                  <HeaderIconButton
                     icon={'chevron-back-outline'}
                     style={{ marginLeft: 16 }}
                     onPress={() => navigation.goBack()}
                  />
               ),
               headerRight: () => (
                  <HeaderIconButton
                     icon={'heart-outline'}
                     style={{ marginRight: 16 }}
                     onPress={() => navigation.goBack()}
                  />
               ),
            })}
         />
         <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      </Stack.Navigator>
   )
}
