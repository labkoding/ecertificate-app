import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

const API_URL = 'http://localhost:8080/v1/users/forgotpassword'

function ForgotPasswordScreen ({ title }) {
  const navigation = useNavigation()
  const [error, setError] = React.useState({
    email: ''
  })
  const [payload, setPayload] = React.useState({
    email: ''
  })
  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')
  const handleChange = (field, value) => {
    if (field === 'email') error.email = !value.includes('@') ? 'Invalid email' : ''
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const fetchResults = (data) => {
    console.log('data===>', data)
    if (data.status === 'ok') {
      navigation.navigate('OtpScreen', { action: 'forgotpassword', otpRef: data.otpRef })
    } else {
      let errorMessage = data.message
      if (((data.message || {}).message + '').includes('tb_user.email_UNIQUE')) errorMessage = 'Email not found'
      setError({ ...error, email: errorMessage })
      setErrorJsonString(JSON.stringify(error))
    }
  }
  const handleSubmit = async () => {
    if (payload.email === '') error.email = 'Email is required'
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    console.log('error===>', error)
    if (error.email) {
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
        <Text>Forgot Password</Text>
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
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={handleSubmit}
        >
          Submit
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

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
