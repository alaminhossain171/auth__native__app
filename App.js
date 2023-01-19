import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigations/routes'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { useEffect } from 'react'
import { getUserData } from './src/utils/utlits'
import { saveUserData } from './src/redux/actions/auth'
const App = () => {
  useEffect(()=>{
(async()=>{
const userData=await getUserData();
console.log('user data app ===> ',userData)
if(!!userData){
saveUserData(userData)
}
})()
  },[])
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
    <Routes />
    <FlashMessage position={'bottom'} />
    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
