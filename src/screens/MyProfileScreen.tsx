import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { userProfileAtom } from '../GlobalAtom'
import AppBarComp from '../components/AppBarComp'

function MyProfileScreen ({ title }) {
  const [userProfile] = useAtom(userProfileAtom)
  return (
    <>
      <AppBarComp title={title} />
      <View style={styles.container}>
        <List.Section>
          {/* <List.Subheader>My Profile</List.Subheader> */}
          <List.Item
            title='Name'
            description={userProfile.full_name}
          />
          <List.Item
            title='Email'
            description={userProfile.email}
          />
        </List.Section>
        <StatusBar style='auto' />
      </View>
    </>
  )
}

export default MyProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
