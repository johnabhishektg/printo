import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// "#3599f5"

export default function DrawerNavigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#fff",
          drawerLabelStyle: { marginLeft: -20 },
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            headerShown: false,
            drawerIcon: () => (
              <Ionicons name="home-outline" size={22} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="orders" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "My Orders",
            drawerIcon: () => (
              <Ionicons name="archive" size={22} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="payments" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "My Payments",
            drawerIcon: () => (
              <Feather name="dollar-sign" size={22} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Settings",
            drawerIcon: () => (
              <Ionicons name="settings" size={22} color="#fff" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
