import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

function ForgotPasswordScreen ({ title }) {
  const navigation = useNavigation()
  const [error, setError] = React.useState({
    email: false
  })
  const [payload, setPayload] = React.useState({
    email: ''
  })
  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')
  const handleChange = (field, value) => {
    if (field === 'email') error.email = !value.includes('@')
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const handleSubmit = () => {
    if (payload.email === '') error.email = true
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    console.log('error===>', error)
    if (error.email) {
      return false
    }
    navigation.navigate('OtpScreen')
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
          error={error.email}
          onChangeText={(text) => handleChange('email', text)}
          value={payload.email}
        />
        <HelperText type='error' visible={error.email}>
          Email address is invalid!
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
