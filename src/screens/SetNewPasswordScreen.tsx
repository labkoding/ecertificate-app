import React from 'react'
import { useAtom } from 'jotai'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, HelperText, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { isLoggedInAtom } from '../GlobalAtom'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

function SetNewPasswordScreen ({ title }) {
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom)
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
    password: false,
    confirmPassword: false
  })

  // payload of the form
  const [payload, setPayload] = React.useState({
    password: '',
    confirmPassword: ''
  })

  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')

  const handleChange = (field, value) => {
    if (field === 'password') error.password = value.length <= 6
    if (field === 'confirmPassword') error.confirmPassword = value !== payload.password
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const handleSubmit = () => {
    if (payload.password === '') error.password = true
    if (payload.confirmPassword === '') error.confirmPassword = true
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    console.log('error===>', error)
    if (error.password || error.confirmPassword) {
      return false
    }
    navigation.navigate('LoginScreen')
  }
  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text>Set New Password</Text>
        <TextInput
          style={{ marginTop: 15 }}
          label='new password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('newPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.newPassword}
          error={error.password}
          onChangeText={(text) => handleChange('password', text)}
          value={payload.password}
        />
        <HelperText type='error' visible={error.password}>
          Password must be at least 6 characters!
        </HelperText>
        <TextInput
          style={{ marginTop: 15 }}
          label='confirm password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('confirmPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.confirmPassword}
          error={error.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          value={payload.confirmPassword}
        />
        <HelperText type='error' visible={error.confirmPassword}>
          Password does not match!
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

export default SetNewPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
