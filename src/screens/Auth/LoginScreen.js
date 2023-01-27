import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useContext, useState } from 'react';
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import navigationStrings from '../../navigations/navigationStrings'

// 3rd party deps 
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login, loginAction } from '../../redux/actions/authAction';




const LoginSchema = Yup.object().shape({


  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string().required('Password Required').max(5, ({ max }) => `Password must be ${max} character`)

});





const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  function handleLogin(values) {
  login(values)
  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validateOnMount={true}
        validationSchema={LoginSchema}

        initialValues={{ email: '', password: '' }}

        onSubmit={values => handleLogin(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, isValid, errors }) => (
          <View style={{ flex: 1 }}>


            <TextInputField
              label={'Email'}
              placeholder='Enter your Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={(errors.email && touched.email) ? errors.email : null}
            />
            <TextInputField
              label={'Password'}
              placeholder='Enter your Password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              error={(errors.password && touched.password) ? errors.password : null}
            />

            <CustomButton
              isLoading={false}
              title='Login'
              handleNavigation={handleSubmit}
            />

            <CustomButton

              title='Signup'
              handleNavigation={() => navigation.navigate(navigationStrings.SIGNUP)}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})