
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';


const Stack = createNativeStackNavigator();

function Routes() {


  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false,headerTitleAlign:'center' }}>
       {!true?MainStack(Stack):AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;