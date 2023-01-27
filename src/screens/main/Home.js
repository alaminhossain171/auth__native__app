import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import navigationStrings from '../../navigations/navigationStrings'
import { useSelector } from 'react-redux';



const Home = ({navigation}) => {
  const userData=useSelector((state)=>state.authReducer.userData);

  return (
    <View>
    <Button title='Dashborad' onPress={()=>navigation.navigate(navigationStrings.DASHBORARD)} />
    <Text style={{color:'red'}}>This is Home page hello {userData?.name}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})