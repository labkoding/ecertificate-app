import React from 'react'
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

function HomeScreen ({ title }) {
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
          <Card.Cover source={require('../assets/images/semintar1.jpeg')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Explore</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/images/semintar1.jpeg')} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Explore</Button>
          </Card.Actions>
        </Card>
        <StatusBar style='auto' />
      </ScrollView>
    </>
  )
}

export default HomeScreen

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
