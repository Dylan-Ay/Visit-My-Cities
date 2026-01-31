import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons'
import { ExplorerScreen } from '../screens/ExplorerScreen'
import { VisitScreen } from '../screens/VisitScreen'
import { AddScreen } from '../screens/AddScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FF6B00',
            tabBarInactiveTintColor: '#999',
         }}
      >
         <Tab.Screen
            name="Accueil"
            component={HomeScreen}
            options={{
               tabBarLabel: 'Accueil',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Explorer"
            component={ExplorerScreen}
            options={{
               tabBarLabel: 'Explorer',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search-outline" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Visiter"
            component={VisitScreen}
            options={{
               tabBarLabel: 'A Visiter',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map-outline" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Ajouter"
            component={AddScreen}
            options={{
               tabBarLabel: 'Ajouter',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons
                     name="add-circle-outline"
                     color={color}
                     size={size}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Profil"
            component={ProfileScreen}
            options={{
               tabBarLabel: 'Profil',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons
                     name="person-circle-outline"
                     color={color}
                     size={size}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   )
}
