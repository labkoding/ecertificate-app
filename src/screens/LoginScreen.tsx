import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppBarComp from '../components/AppBarComp'

function LoginScreen ({ title }) {
  return (
    <>
      <AppBarComp title={title} />
      <View style={styles.container}>
        <Text>Login</Text>
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
