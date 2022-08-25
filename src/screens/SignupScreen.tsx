import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, HelperText, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

const API_URL = 'http://localhost:8080/v1/users/signup'

function SignupScreen ({ title }) {
  const navigation = useNavigation()
  const [secureTextEntry, setSecureTextEntry] = React.useState({
    newPassword: true,
    confirmPassword: true
  })
  const toggleSecureTextEntry = (field) => {
    setSecureTextEntry({ ...secureTextEntry, [field]: !secureTextEntry[field] })
  }
  // toggle for input text wheter error or not error
  const [error, setError] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // payload of the form
  const [payload, setPayload] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')

  const handleChange = (field, value) => {
    if (field === 'fullname') error.fullname = value.length <= 4 ? 'Fullname must be at least 4 characters' : ''
    if (field === 'email') error.email = !value.includes('@') ? 'Email must be valid' : ''
    if (field === 'password') error.password = value.length <= 6 ? 'Password must be at least 6 characters' : ''
    if (field === 'confirmPassword') error.confirmPassword = value !== payload.password ? 'Password must match' : ''
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const fetchResults = (data) => {
    console.log('data===>', data)
    if (data.status === 'ok') {
      navigation.navigate('OtpScreen', { action: 'signup', otpRef: data.otpRef })
    } else {
      console.log('error = ', data.message.message)
      let errorMessage = data.message
      if (((data.message || {}).message + '').includes('tb_user.email_UNIQUE')) errorMessage = 'Email already exists'
      setError({ ...error, email: errorMessage })
      setErrorJsonString(JSON.stringify(error))
    }
  }
  const handleSubmit = async () => {
    // validate email
    if (payload.fullname === '') error.fullname = 'Fullname is required'
    if (payload.email === '') error.email = 'Fullname must be at least 4 characters'
    if (payload.password === '') error.password = 'Password must be at least 6 characters'
    if (payload.confirmPassword === '') error.confirmPassword = 'Password must match'
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    if (error.email !== '' || error.password !== '' || error.confirmPassword !== '' || error.fullname !== '') {
      return false
    }
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
  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text>Signup</Text>
        <TextInput
          style={{ marginTop: 15 }}
          label='name'
          mode='outlined'
          error={error.fullname !== ''}
          onChangeText={(text) => handleChange('fullname', text)}
          value={payload.fullname}
        />
        <HelperText type='error' visible={error.fullname !== ''}>
          {error.fullname}
        </HelperText>
        <TextInput
          style={{ marginTop: 15 }}
          label='email'
          mode='outlined'
          error={error.email !== ''}
          onChangeText={(text) => handleChange('email', text)}
          value={payload.email}
        />
        <HelperText type='error' visible={error.email !== ''}>
          {error.email}
        </HelperText>
        <TextInput
          style={{ marginTop: 15 }}
          label='new password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('newPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.newPassword}
          error={error.password !== ''}
          onChangeText={(text) => handleChange('password', text)}
          value={payload.password}
        />
        <HelperText type='error' visible={error.password !== ''}>
          {error.password}
        </HelperText>
        <TextInput
          style={{ marginTop: 15 }}
          label='confirm password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('confirmPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.confirmPassword}
          error={error.confirmPassword !== ''}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          value={payload.confirmPassword}
        />
        <HelperText type='error' visible={error.confirmPassword !== ''}>
          {error.confirmPassword}
        </HelperText>
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={handleSubmit}
        >
          Signup
        </Button>
        <Button
          style={{ marginTop: 15 }}
          icon='account-plus'
          mode='text'
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Login
        </Button>
        <StatusBar style='auto' />
      </View>
    </TextInputAvoidingView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
