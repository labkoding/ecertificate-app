import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppBarComp from '../components/AppBarComp'

function HomeScreen ({ title }) {
  return (
    <>
      <AppBarComp title={title} />
      <View style={styles.container}>
        <Text>Home</Text>
        <StatusBar style='auto' />
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
