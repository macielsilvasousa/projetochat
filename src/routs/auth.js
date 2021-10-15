import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../pages/Home/index";
import Chat  from "../pages/Chat/index";

const Drawer = createDrawerNavigator();

export default function Auth(){
    return(        
    <Drawer.Navigator
    screenOptions={{
        headerShown: false,
        drawerStyle:{
            backgroundColor: "#090A0E",
            paddingTop: 20
        },
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#7B68EE",
        drawerInactiveTintColor: "#FFF"
    }}
    >
        <Drawer.Screen name="Home" component={Home} 
         options={{

            drawerIcon: ({focused,size,color})=>(
                <MaterialCommunityIcons
                    name="home"
                    size={size}
                    color={color}
                />
            ) 

         }}
        />

        <Drawer.Screen name="Chat" component={Chat} 
            options={{

            drawerIcon: ({focused,size,color})=>(
                <MaterialCommunityIcons
                    name="chat"
                    size={size}
                    color={color}
                        />
                    ) 

        }}
        />
    </Drawer.Navigator>
    )
}

