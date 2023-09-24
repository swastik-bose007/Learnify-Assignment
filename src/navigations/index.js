// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import LoginScreen from "../Screens/LoginScreen";
import OTPScreens from "../Screens/OTPScreens";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">  
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreens" component={OTPScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
