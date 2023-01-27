import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LOGIN, SIGNUP } from '../config/urls';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({})

  const registerFunc = async (values) => {
    setIsLoading(true)
    try {
      const res = await axios.post(SIGNUP, values);
      if (res.data.status == 200) {
        setUserInfo(res?.data?.user);
        setUserToken(res?.data?.token);
        await AsyncStorage.setItem('userInfo', JSON.stringify(res?.data?.user))
        await AsyncStorage.setItem('userToken', res?.data?.token)
        setIsLoading(false);
        console.log('signup success',res.data)
      }
      else {
        console.log('signup failed')
        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false);
      console.log('sign up faild', error)
    }

  }


  async function LoginFunc(values) {
    setIsLoading(true)
    try {
      const res = await axios.post(LOGIN, values);
      if (res.data.status == 200) {
        setUserInfo(res.data);
        setUserToken(res.data.token)
        
        await AsyncStorage.setItem('userInfo', JSON.stringify(res.data))
        await AsyncStorage.setItem('userToken', res.data.token)
        setIsLoading(false);
        console.log('login success',res.data)
      }
      else {
        console.log('login failed')
        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false);
      console.log('login failed', error)
    }

  }

  async function LogOutFunc() {
    try {
      setIsLoading(true);
      setUserToken(null);
      setUserInfo(null);
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userInfo');
      setIsLoading(false)
    } catch (e) {
      console.log('logout faild', e)
    }

  }
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo=await AsyncStorage.getItem('userInfo');
      userInfo=JSON.parse(userInfo);
      if(userInfo){
        setUserInfo(userInfo);
        setUserToken(userToken);
        setIsLoading(false)
      }
    
    } catch (error) {
      console.log('is login error ', error);
    }
  }






  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{
      userToken,
      isLoading,
      LoginFunc,
      LogOutFunc,
      registerFunc,
      userInfo

    }}>
      {children}
    </AuthContext.Provider>
  )
}