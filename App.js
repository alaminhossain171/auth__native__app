import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigations/routes'
import FlashMessage from 'react-native-flash-message'
const App = () => {
  return (
    <View style={{flex:1}}>
    <Routes />
    <FlashMessage position={'bottom'} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
