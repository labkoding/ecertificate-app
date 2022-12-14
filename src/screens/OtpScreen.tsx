import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'
import AppConfig from '../config/AppConfig'

const API_URL = AppConfig.baseUrlApi + '/otp'
/**
 *
 * @param param0 screenProps action adalah tujuan dari validasi otp
 * @returns OtpScreen
 */
function OtpScreen ({ title, route: { params: { action, otpRef } } }) {
  const insets = useSafeAreaInsets()
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
  const handleResendOtp = async () => {
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
    const response = await fetch(API_URL + '/validate/signup', data)
    const dataResponse = await response.json()
    if (dataResponse.status === 'ok') {
      // resend otp success
      // ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
    } else {
      // resend otp failed
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
      <ScrollView
        style={[styles.container, { backgroundColor: background, marginTop: insets.top }]}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >
        <Text style={{ marginTop: 100 }}>The otp has send to your email</Text>
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
          icon='reload'
          mode='text'
          onPress={handleResendOtp}
        >
          Resend OTP
        </Button>
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
      </ScrollView>
    </TextInputAvoidingView>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  }
})
