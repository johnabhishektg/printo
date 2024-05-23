import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function componentName() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="printjob" options={{ headerShown: false }} />
        <Stack.Screen name="printpreview" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
