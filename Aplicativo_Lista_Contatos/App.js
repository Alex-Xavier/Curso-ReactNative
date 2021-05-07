import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { PeopleScreen, PeopleDetailScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  People: {
    screen: PeopleScreen
  },
  PeopleDetail: {
    screen: PeopleDetailScreen,
    navigationOptions: ({ navigation }) => {
      const { first, last } = navigation.state.params.people.name

      return ({
        title: `${first} ${last}`,
        headerTitleStyle: {
          color: '#FFF',
          fontSize: 25,
          flexGrow: 1
        }
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 30,
      flexGrow: 1,
      alignSelf: 'center'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer