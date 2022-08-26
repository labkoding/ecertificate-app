import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'
import { loginIdAtom, userProfileAtom } from '../GlobalAtom'
import AppConfig from '../config/AppConfig'

const API_URL = AppConfig.baseUrlApi + '/users/login'

function LoginScreen ({ title }) {
  const insets = useSafeAreaInsets()
  const [, setLoginIdAtom] = useAtom(loginIdAtom)
  const [, setUserProfile] = useAtom(userProfileAtom)
  const navigation = useNavigation()
  const [secureTextEntry, setSecureTextEntry] = React.useState({
    password: true
  })
  const [error, setError] = React.useState({
    email: '',
    password: ''
  })

  // payload of the form
  const [payload, setPayload] = React.useState({
    email: '',
    password: ''
  })

  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')

  const toggleSecureTextEntry = (field) => {
    setSecureTextEntry({ ...secureTextEntry, [field]: !secureTextEntry[field] })
  }

  const handleChange = (field, value) => {
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const fetchResults = (data) => {
    console.log('data===>', data)
    if (data.status === 'ok') {
      setPayload({ email: '', password: '' })
      setPayloadJsonString(JSON.stringify(payload))
      setLoginIdAtom(data.loginId)
      setUserProfile(data.userProfile)
      // AsyncStorage.setItem('loginId', data.loginId)
      // AsyncStorage.setItem('userProfile', JSON.stringify(data.userProfile))
    } else {
      setError({ ...error, email: 'Invalid email or password' })
      setErrorJsonString(JSON.stringify(error))
    }
  }
  const handleSubmit = async () => {
    const { email, password } = payload
    let isValid = true
    if (!email || !email.includes('@')) {
      error.email = 'Invalid email or password'
      setError(error)
      setErrorJsonString(JSON.stringify(error))
      isValid = false
    }
    if (!password || password.length <= 6) {
      error.password = 'Invalid email or password'
      setError(error)
      setErrorJsonString(JSON.stringify(error))
      isValid = false
    }
    console.log('error===>', error)
    console.log('payload===>', payload)
    if (isValid) {
      // navigation.navigate('HomeScreen')
      error.email = ''
      error.password = ''
      setError(error)
      setErrorJsonString(JSON.stringify(error))
      const data = {
        method: 'POST',
        // credentials: 'same-origin',
        // mode: 'same-origin',
        body: JSON.stringify(payload),
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json'
          // 'X-CSRFToken':  cookie.load('csrftoken')
        }
      }
      const response = await fetch(API_URL, data)
      fetchResults(await response.json())
    }
  }

  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      <ScrollView
        style={[styles.container, { backgroundColor: background, marginTop: insets.top }]}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >
        {/* <View style={[styles.container, { backgroundColor: background }]}> */}
        <Text style={{ marginTop: 100 }}>Login</Text>
        <TextInput
          style={{ marginTop: 15 }}
          label='email'
          mode='outlined'
          onChangeText={(text) => handleChange('email', text)}
          value={payload.email}
        />
        <TextInput
          style={{ marginTop: 15 }}
          label='password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('password')} icon='eye' />}
          secureTextEntry={secureTextEntry.password}
          onChangeText={(text) => handleChange('password', text)}
          value={payload.password}
        />
        <HelperText type='error' visible={error.password !== '' || error.email !== ''}>
          Invalid email or password
        </HelperText>
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={handleSubmit}
        >
          Login
        </Button>
        <Button
          style={{ marginTop: 15 }}
          icon='account-plus'
          mode='text'
          onPress={() => navigation.navigate('SignupScreen')}
        >
          Signup
        </Button>
        <Button
          style={{ marginTop: 15 }}
          icon='lock-question'
          mode='text'
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          Forgot Password
        </Button>
        <StatusBar style='auto' />
        {/* </View> */}
      </ScrollView>
    </TextInputAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
