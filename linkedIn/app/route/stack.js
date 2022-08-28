import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} 
            options={{ drawerItemStyle: {height: 0}, headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator;
