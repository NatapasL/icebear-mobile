import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { styles } from './styles'
import {
  LoginScene,
  HomeScene,
  RoomScene,
  UserScene,
} from '../scenes'

const ROUTES = [
  {
    name: 'home',
    component: HomeScene,
  },
  {
    name: 'room',
    component: RoomScene,
  },
  {
    name: 'login',
    component: LoginScene,
  },
  {
    name: 'user',
    component: UserScene,
  },
]

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {ROUTES.map(({ name, component }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            cardStyle: styles.card,
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
)
