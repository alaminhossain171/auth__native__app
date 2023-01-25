import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react';

export const AuthContext=createContext();

export default function AuthProvider({children}) {
  const [test,setTest]=useState('context working fine')
  return (
    <AuthContext.Provider value={{test}}>
     {children}
    </AuthContext.Provider>
  )
}