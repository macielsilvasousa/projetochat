import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import AuthProvider from './src/contexts/auth';
import Routs from "./src/routs/index";

function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
          <Routs/>
        </AuthProvider> 
    </NavigationContainer>
  );
}

export default App;


