import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import navigationStrings from '../../navigations/navigationStrings'
import validator from '../../utils/validation';
import { showError } from '../../utils/helperFunc'

const SignUpScreen = ({ navigation }) => {
  const [state, setstate] = useState({
    isLoading: false,
    userName:'',
    email: '',
    password: '',
    isSecure: true
  });
  const { email, isLoading, password, isSecure ,userName} = state;
  const isVaildData = () => {
    const error = validator({
      userName,
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
      navigation.navigate(navigationStrings.LOGIN);
    }


  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <TextInputField
          label={'User Name'}
          placeholder='Enter your User Name'

          onChangeText={(e) => setstate({ ...state, userName: e })}

        />
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

export default SignUpScreen;

const styles = StyleSheet.create({})