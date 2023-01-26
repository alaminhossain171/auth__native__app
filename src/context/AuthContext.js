import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function LoginFunc(email,password) {
console.log(`this is from context ${email} and ${password}`)

    // try {
    //   setIsLoading(true);
    //   setUserToken('dsfjsdfjkj');
    //   await AsyncStorage.setItem('userToken', 'dkjafdksjf');
    //   setIsLoading(false)
    // } catch (e) {
    //   console.log('storing token error', e)
    // }



  }
  async function LogOutFunc() {
    try {
      setIsLoading(true);
      setUserToken(null);
      await AsyncStorage.removeItem('userToken');
      setIsLoading(false)
    } catch (e) {
      console.log('logout faild', e)
    }

  }
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false)
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
      LogOutFunc

    }}>
      {children}
    </AuthContext.Provider>
  )
}