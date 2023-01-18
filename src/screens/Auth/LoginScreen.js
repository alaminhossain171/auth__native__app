import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import navigationStrings from '../../navigations/navigationStrings'
import validator from '../../utils/validation';
import { showError } from '../../utils/helperFunc'

const LoginScreen = ({ navigation }) => {
  const [state, setstate] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true
  });
  const { email, isLoading, password, isSecure } = state;
  const isVaildData = () => {
    const error = validator({
      email,
      password
    })
    if (error) {
  showError(error)
      return false;
    }
    return true
  }


  function handleRoute() {
    const checkVaild = isVaildData();
    if (checkVaild) {
      navigation.navigate(navigationStrings.SIGNUP);
    }


  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInputField
          label={'Email'}
          placeholder='Enter your Email'

          onChangeText={(e) => setstate({ ...state, email: e })}

        />
        <TextInputField
          label={'Password'}
          placeholder='Enter your Password'
          secureTextEntry={isSecure}
          onChangeText={(e) => setstate({ ...state, password: e })}
        />

        <CustomButton
          title='Login'
          handleNavigation={handleRoute}
        />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})