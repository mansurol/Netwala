import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Navigation/BottomTab";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Additional resource loading or API calls can be done here

        // Simulate a loading delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </>
  );
}
