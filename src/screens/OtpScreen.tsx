import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

function OtpScreen ({ title }) {
  const navigation = useNavigation()
  const [error, setError] = React.useState({
    otp: false
  })
  const [payload, setPayload] = React.useState({
    otp: ''
  })
  const [, setErrorJsonString] = React.useState('')
  const [, setPayloadJsonString] = React.useState('')
  const handleChange = (field, value) => {
    // if (field === 'email') error.otp = !value.includes('@')
    setPayload({ ...payload, [field]: value })
    setPayloadJsonString(JSON.stringify(payload))
  }
  const handleSubmit = () => {
    if (payload.otp === '') error.otp = true
    setError(error)
    setErrorJsonString(JSON.stringify(error))
    console.log('error===>', error)
    if (error.otp) {
      return false
    }
    navigation.navigate('SetNewPasswordScreen')
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
          error={error.otp}
          onChangeText={(text) => handleChange('otp', text)}
          value={payload.otp}
        />
        <HelperText type='error' visible={error.otp}>
          Otp is invalid!
        </HelperText>
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={handleSubmit}
        >
          Validate
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
