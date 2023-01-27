import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../../components/CustomButton'




const Profile = () => {



  return (
    <View>
      <Text>Name:</Text>
      <CustomButton title={'Logout'} isLoading={false} handleNavigation={()=>console.log('')} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})