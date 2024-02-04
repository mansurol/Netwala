import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import BottomTab from "./Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setSplashReady(true);
    };

    initializeApp();
  }, []);

  if (!isSplashReady) {
    return <View style={{ flex: 1, backgroundColor: "#fff" }} />;
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
