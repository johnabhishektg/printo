import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, Text } from "react-native";
import { router } from "expo-router";

// "#3599f5"
function CustomDrawerContent(props: any) {
  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#3599f5" }}
      >
        <View className="px-4 py-2 space-y-3">
          <View className="flex-row items-center gap-4 ">
            <Image
              className="w-16 h-16 rounded-full border border-white"
              source={require("../../assets/images/profile.jpeg")}
            />
            <View>
              <Text className="text-white">Hello,</Text>
              <Text className="text-white text-xl font-semibold">
                John Abhishek
              </Text>
            </View>
          </View>
          <View className="bg-white w-full h-[0.5px] mb-2" />
        </View>

        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
    </View>
  );
}

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
      </Drawer>
    </GestureHandlerRootView>
  );
}
