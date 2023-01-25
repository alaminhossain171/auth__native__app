import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Routes from './src/navigations/routes'
import AuthProvider from './src/context/AuthContext'


export default function App() {
  return (
    <AuthProvider>
    <StatusBar />
    <Routes />
    </AuthProvider>
  )
}


