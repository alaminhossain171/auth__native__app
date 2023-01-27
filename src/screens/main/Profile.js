import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../../components/CustomButton'

import { logout } from '../../redux/actions/authAction'




const Profile = () => {




  return (
    <View>
      <Text>Name:</Text>
      <CustomButton title={'Logout'} isLoading={false} handleNavigation={()=>logout()} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})