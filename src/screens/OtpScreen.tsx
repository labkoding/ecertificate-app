import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

const API_URL = 'https://ecertificate-api.labkoding.co.id/v1/otp'

function OtpScreen ({ title, route: { params: { action, otpRef } } }) {
  console.log('action===>', action)
  const navigation = useNavigation()
  const [error, setError] = React.useState({
    otp: ''
  })
  const [payload, setPayload] = React.useState({
    otp: '',
    otpRef: otpRef
  })
  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')
  const handleChange = (field, value) => {
    if (field === 'otp') error.otp = value === '' ? 'OTP is required' : ''
    setError(error)
    setErrorJsonString(JSON.stringify(error))

    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const fetchResults = (data) => {
    if (data.status === 'ok') {
      if (action === 'signup') {
        navigation.navigate('LoginScreen')
      } else if (action === 'forgotpassword') {
        navigation.navigate('SetNewPasswordScreen', { userId: data.entityId })
      } else {
        navigation.navigate('LoginScreen')
      }
    } else {
      setError({ ...error, otp: 'invalid otp' })
      setErrorJsonString(JSON.stringify(error))
    }
  }
  const handleSubmit = async () => {
    console.log('handleSubmit')
    if (payload.otp === '') error.otp = 'otp is required'
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    console.log('error===>', error)
    if (error.otp !== '') {
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
    if (action === 'signup') {
      const response = await fetch(API_URL + '/validate/signup', data)
      fetchResults(await response.json())
    } else if (action === 'forgotpassword') {
      const response = await fetch(API_URL + '/validate/forgotpassword', data)
      fetchResults(await response.json())
    } else {
      navigation.navigate('LoginScreen')
    }
  }
  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text>The otp has send to your email</Text>
        <TextInput
          style={{ marginTop: 15 }}
          label='Otp'
          mode='outlined'
          error={error.otp !== ''}
          onChangeText={(text) => handleChange('otp', text)}
          value={payload.otp}
        />
        <HelperText type='error' visible={error.otp !== ''}>
          {error.otp}
        </HelperText>
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={handleSubmit}
        >
          Validate
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

export default OtpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
