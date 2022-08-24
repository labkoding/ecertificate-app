import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function LoginScreen ({ title }) {
  const navigation = useNavigation()
  const [secureTextEntry, setSecureTextEntry] = React.useState({
    password: true
  })
  const toggleSecureTextEntry = (field) => {
    setSecureTextEntry({ ...secureTextEntry, [field]: !secureTextEntry[field] })
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={{ marginTop: 15 }}
          label='email'
          mode='outlined'
        />
        <TextInput
          style={{ marginTop: 15 }}
          label='password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('password')} icon='eye' />}
          secureTextEntry={secureTextEntry.password}
        />
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
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
