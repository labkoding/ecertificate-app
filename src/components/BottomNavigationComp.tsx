import * as React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import MyCertificateScreen from '../screens/MyCertificateScreen';

const BottomNavigationComp = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'HomeScreen', title: 'Home', focusedIcon: 'home-circle', unfocusedIcon: 'home-circle' },
    { key: 'MyCertificateScreen', title: 'MyCertificate', focusedIcon: 'certificate' }
  ])

  const renderScene = BottomNavigation.SceneMap({
    HomeScreen: () => <HomeScreen title='Home' />,
    MyCertificateScreen: () => <MyCertificateScreen title='My Certificate' />
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
};

export default BottomNavigationComp