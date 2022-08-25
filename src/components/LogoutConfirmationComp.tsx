import * as React from 'react'
import { useAtom } from 'jotai'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import { loginIdAtom } from '../GlobalAtom'

const LogoutConfirmationComp = ({ visible, hideDialog }) => {
  const [, setLoginId] = useAtom(loginIdAtom)
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
              setLoginId('')
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
