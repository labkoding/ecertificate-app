import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppBarComp from '../components/AppBarComp'

function MyCertificateScreen ({ title }) {
  return (
    <>
      <AppBarComp title={title} />
      <View style={styles.container}>
        <Text>MyCertificateScreen</Text>
        <StatusBar style='auto' />
      </View>
    </>
  )
}

export default MyCertificateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
