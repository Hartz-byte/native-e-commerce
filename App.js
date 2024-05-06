import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./src/Navigator/AppNavigator";

export default function App() {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <AppNavigator />
    </>
  );
}
