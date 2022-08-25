import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
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
            <Button onPress={() => {}}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Download</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/sampletc121.png')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Download</Button>
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
