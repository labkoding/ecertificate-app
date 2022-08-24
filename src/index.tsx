import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' headerMode='none'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
