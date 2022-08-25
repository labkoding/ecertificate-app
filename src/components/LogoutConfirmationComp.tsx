import * as React from 'react'
import { useAtom } from 'jotai'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import { isLoggedInAtom } from '../GlobalAtom'

const LogoutConfirmationComp = ({ visible, hideDialog }) => {
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom)
  return (
    <Portal>
      <Dialog
        onDismiss={hideDialog}
        visible={visible}
      >
        <Dialog.Title>Logout Confirmation</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
          Are you sure want to logout?
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              setIsLoggedIn(false)
              hideDialog()
            }}
          >
          OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default LogoutConfirmationComp
