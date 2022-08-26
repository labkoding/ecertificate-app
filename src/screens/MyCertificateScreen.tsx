import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import * as Linking from 'expo-linking'
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme
} from 'react-native-paper'
import AppBarComp from '../components/AppBarComp'

function MyCertificateScreen ({ title }) {
  const {
    colors: { background }
  } = useTheme()
  return (
    <>
      <AppBarComp title={title} />
      <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => Linking.openURL('https://png.pngtree.com/thumb_back/fh260/back_pic/04/47/51/665858c95c31b60.jpg')}>Download</Button>
          </Card.Actions>
        </Card>
        <StatusBar style='auto' />
      </ScrollView>
    </>
  )
}

export default MyCertificateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 4
  },
  card: {
    margin: 4
  }
})
