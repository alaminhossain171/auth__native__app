import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import navigationStrings from '../../navigations/navigationStrings'
import { AuthContext } from '../../context/AuthContext'


const Home = ({navigation}) => {
  const {userInfo}=useContext(AuthContext)

  return (
    <View>
    <Button title='Dashborad' onPress={()=>navigation.navigate(navigationStrings.DASHBORARD)} />
    <Text style={{color:'red'}}>This is Home page hello {userInfo?.name || userInfo?.first_name}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})