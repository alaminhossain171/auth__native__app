import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/navigations/routes'
import { Provider } from 'react-redux'
import {store} from './src/redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { saveUserData } from './src/redux/actions/authAction'




export default function App() {

  useEffect(()=>{
    (async()=>{
    let userData=await AsyncStorage.getItem('userData');
    userData=JSON.parse(userData)
    console.log('user data app ===> ',userData)
    if(!!userData){
    saveUserData(userData)
    }
    })()
      },[])

  return (
    <Provider store={store}>
    <StatusBar />
    <Routes />
    </Provider>
  )
}


