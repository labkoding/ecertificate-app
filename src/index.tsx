import React from 'react'
import { useAtom } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import BottomNavigationComp from './components/BottomNavigationComp'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import OtpScreen from './screens/OtpScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import { loginIdAtom } from './GlobalAtom'
import SetNewPasswordScreen from './screens/SetNewPasswordScreen'
import SplashScreen from './screens/SplashScreen'

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
  const [loginId] = useAtom(loginIdAtom)
  const [token, setToken] = React.useState(null)
  React.useEffect(() => {
    setToken(loginId)
  }, [loginId])
  console.log('App invoked with loginId:', loginId, 'token:', token)
  if (token === null) {
    return (<SplashScreen title='splash' />)
  }

  if (loginId === '') {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={props => <SignupScreen {...props} />} />
            <Stack.Screen name='OtpScreen' component={OtpScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
            <Stack.Screen name='SetNewPasswordScreen' component={SetNewPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomNavigationComp' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='BottomNavigationComp' component={props => <BottomNavigationComp {...props} />} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
