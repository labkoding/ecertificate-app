import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button, useTheme, HelperText } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

function LoginScreen ({ title }) {
  const navigation = useNavigation()
  const [secureTextEntry, setSecureTextEntry] = React.useState({
    password: true
  })
  const [error, setError] = React.useState({
    email: false,
    password: false
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

  React.useEffect(() => {
    // error.email = (payload.email && !payload.email.includes('@')) ? true : false
    // error.password = (payload.password && payload.password.length <= 6) ? true : false
    // setError(error)
    // setErrorJsonString(JSON.stringify(error))
  }, [payload])
  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      {/* <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      > */}
      <View style={styles.container}>
        <Text style={{ marginTop: 100 }}>Login</Text>
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
        <TextInput
          style={{ marginTop: 15 }}
          label='password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('password')} icon='eye' />}
          secureTextEntry={secureTextEntry.password}
          error={error.password}
          onChangeText={(text) => handleChange('password', text)}
          value={payload.password}
        />
        <HelperText type='error' visible={error.password}>
          Password is invalid!
        </HelperText>
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={null}
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
        <StatusBar style='auto' />
      </View>
      {/* </ScrollView> */}
    </TextInputAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
    // flex: 1,
    // padding: 8,
    // backgroundColor: background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
