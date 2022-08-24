import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigationComp from './components/BottomNavigationComp'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomNavigationComp' headerMode='none'>
        <Stack.Screen name='BottomNavigationComp' component={BottomNavigationComp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
