import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import navigationStrings from '../../navigations/navigationStrings'



const Home = ({navigation}) => {


  return (
    <View>
    <Button title='Dashborad' onPress={()=>navigation.navigate(navigationStrings.DASHBORARD)} />
    <Text style={{color:'red'}}>This is Home page hello</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})