import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import CustomButton from '../../components/CustomButton'
import { AuthContext } from '../../context/AuthContext'



const Profile = () => {
  const {LogOutFunc}=useContext(AuthContext)


  return (
    <View>
      <Text>Name:</Text>
      <CustomButton title={'Logout'} isLoading={false} handleNavigation={()=>LogOutFunc()} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})