import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function SignupScreen ({ title }) {
  const navigation = useNavigation()
  const [secureTextEntry, setSecureTextEntry] = React.useState({
    newPassword: true,
    confirmPassword: true
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
          label='new password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('newPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.newPassword}
        />
        <TextInput
          style={{ marginTop: 15 }}
          label='confirm password'
          mode='outlined'
          right={<TextInput.Icon onPress={() => toggleSecureTextEntry('confirmPassword')} icon='eye' />}
          secureTextEntry={secureTextEntry.confirmPassword}
        />
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={null}
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
    </>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
