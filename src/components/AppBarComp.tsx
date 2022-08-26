import * as React from 'react'
import { Appbar } from 'react-native-paper'
import DialogLogoutConfirmationComp from './DialogLogoutConfirmationComp'

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
      <DialogLogoutConfirmationComp visible={logoutDialogVisible} hideDialog={hideDialog} />
    </>
  )
}

export default AppBarComp
