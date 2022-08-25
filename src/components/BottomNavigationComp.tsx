import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import MyCertificateScreen from '../screens/MyCertificateScreen'
import MyProfileScreen from '../screens/MyProfileScreen'

const BottomNavigationComp = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'HomeScreen', title: 'Event', focusedIcon: 'home-circle', unfocusedIcon: 'home-circle' },
    { key: 'MyCertificateScreen', title: 'MyCertificate', focusedIcon: 'certificate' },
    { key: 'MyProfileScreen', title: 'MyProfile', focusedIcon: 'account-settings' }
  ])

  const renderScene = BottomNavigation.SceneMap({
    HomeScreen: () => <HomeScreen title='Event' />,
    MyCertificateScreen: () => <MyCertificateScreen title='My Certificate' />,
    MyProfileScreen: () => <MyProfileScreen title='My Profile' />
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default BottomNavigationComp
