import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import AppBarComp from '../components/AppBarComp'

function OtpScreen ({ title }) {
  return (
    <>
      <AppBarComp title={title} />
      <View style={styles.container}>
        <Text>Otp</Text>
        <TextInput
          style={{ marginTop: 15 }}
          label='email'
          mode='outlined'
        />
        <Button
          style={{ marginTop: 15 }}
          icon='send'
          mode='contained'
          onPress={null}
        >
          Validate
        </Button>
        <StatusBar style='auto' />
      </View>
    </>
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
