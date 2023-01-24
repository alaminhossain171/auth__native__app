import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import navigationStrings from '../../navigations/navigationStrings'

const FlashScreen = ({ navigation }) => {

  const goLogin = () => navigation.navigate(navigationStrings.LOGIN);

  useEffect(() => {
    setTimeout(() => {
      goLogin()
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Text>FlashScreen</Text>
    </View>
  )
}

export default FlashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})