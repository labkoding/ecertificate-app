import { useAtom } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, DarkTheme } from 'react-native-paper'
import BottomNavigationComp from './components/BottomNavigationComp'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import OtpScreen from './screens/OtpScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import { isLoggedInAtom } from './GlobalAtom'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3'
  }
}

function App () {
  const [isLoggedIn] = useAtom(isLoggedInAtom)
  if (!isLoggedIn) {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LoginScreen' headerMode='none'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={props => <SignupScreen {...props} />} />
            <Stack.Screen name='OtpScreen' component={OtpScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomNavigationComp' headerMode='none'>
          <Stack.Screen name='BottomNavigationComp' component={props => <BottomNavigationComp {...props} />} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
