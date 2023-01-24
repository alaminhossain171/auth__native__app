import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CustomButton from '../../components/CustomButton'



const Profile = () => {


  return (
    <View>
      <Text>Name:</Text>
      <CustomButton title={'Logout'} isLoading={true} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})