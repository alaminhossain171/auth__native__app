import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useContext, useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import { AuthContext } from '../../context/AuthContext';



const SignUpSchema = Yup.object().shape({


  first_name: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Name Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().min(5, ({ min }) => `Password must be at least ${min} Character`).required('Password Required ').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
    "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),

});

const SignUpScreen = ({ navigation }) => {
const {registerFunc,isLoading}=useContext(AuthContext)
function resgisterUser(values){
  registerFunc(values)
}

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Formik
        validateOnMount={true}
        validationSchema={SignUpSchema}


        initialValues={{ first_name: '', email: '', phone: '', password: '' }}

        onSubmit={values => resgisterUser(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, isValid, errors }) => (

          <View style={{ flex: 1 }}>
            <TextInputField
              label={'User Name'}
              placeholder='Enter your User Name'

              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
              value={values.first_name}
              error={(errors.first_name && touched.first_name) ? errors.first_name : null}

            />
            <TextInputField
              label={'Email'}
              placeholder='Enter your Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={(errors.email && touched.email) ? errors.email : null}


            />
            <TextInputField
              label={'Phone'}
              placeholder='Enter your Phone no'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              secureTextEntry={true}
              error={(errors.phone && touched.phone) ? errors.phone : null}


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
              isLoading={isLoading}
              title='Signup'
              handleNavigation={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({})