import * as React from 'react'
import { Appbar } from 'react-native-paper'
import LogoutConfirmationComp from './LogoutConfirmationComp'

const AppBarComp = ({ title }) => {
  const [logoutDialogVisible, setLogoutDialogVisible] = React.useState(false)
  const hideDialog = () => {
    setLogoutDialogVisible(false)
  }
  const showDialog = () => {
    setLogoutDialogVisible(true)
  }
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title} />
        <Appbar.Action icon='location-exit' onPress={showDialog} />
      </Appbar.Header>
      <LogoutConfirmationComp visible={logoutDialogVisible} hideDialog={hideDialog} />
    </>
  )
}

export default AppBarComp
