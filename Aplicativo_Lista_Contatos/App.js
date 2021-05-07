import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { PeopleScreen, PeopleDetailScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  People: {
    screen: PeopleScreen
  },
  PeopleDetail: {
    screen: PeopleDetailScreen
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer