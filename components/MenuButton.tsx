import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const MenuButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <View className="p-3 flex-row justify-center border bg-white border-stone-50 shadow rounded-2xl">
        <Ionicons name="menu" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
