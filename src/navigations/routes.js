
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();


function Routes() {
  const {userToken,isLoading} = React.useContext(AuthContext)

  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false,headerTitleAlign:'center' }}>
       {userToken!==null?MainStack(Stack):AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;