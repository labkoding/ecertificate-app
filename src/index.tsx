import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigationComp from './components/BottomNavigationComp'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

// Set the string key and the initial value
const isLoggedInAtom = atomWithStorage('isLoggedIn', false)

const Stack = createStackNavigator()

function App () {
  const [isLoggedIn] = useAtom(isLoggedInAtom)
  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' headerMode='none'>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignupScreen' component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomNavigationComp' headerMode='none'>
        <Stack.Screen name='BottomNavigationComp' component={BottomNavigationComp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
