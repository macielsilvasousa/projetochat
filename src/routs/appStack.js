import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/login/index";
import Register  from "../pages/register/index";

const Stack = createNativeStackNavigator();

export default function AppStack(){
    return(        
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
    )
}

