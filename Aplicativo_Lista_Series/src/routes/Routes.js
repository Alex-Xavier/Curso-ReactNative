import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          title: 'Séries',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
          },
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 30
          }
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes