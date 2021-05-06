import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { PeopleScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  Main: {
    screen: PeopleScreen
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer