import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import TextInputAvoidingView from '../components/TextInputAvoidingViewComp'

function SplashScreen ({ title }) {
  const {
    colors: { background }
  } = useTheme()
  return (
    <TextInputAvoidingView>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text style={{ marginTop: 100 }}>Wellcome...</Text>
        <StatusBar style='auto' />
      </View>
    </TextInputAvoidingView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
