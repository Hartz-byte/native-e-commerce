import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import Login from "../Screens/Login";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* splash screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />

        {/* login screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
