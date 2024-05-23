import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function NotificationScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 m-6">
      <View className="flex-row items-center space-x-6">
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-xl font-semibold">Notification</Text>
      </View>

      {/* Body */}
      <View className="mt-8 space-y-8">
        {/* Card 1 */}
        <TouchableOpacity>
          <View className="flex-row items-center px-2 py-4 border bg-white border-stone-50 shadow rounded-2xl">
            <View className="ml-3 space-y-1">
              <Text className="text-gray-400">Today · 10:24 PM</Text>
              <View className="flex-row space-x-1">
                <Text className="text-xl font-bold">Your print is ready!</Text>
                <Ionicons name="checkmark-circle" size={24} color="#65a765" />
              </View>
              <View>
                <Text className=" text-gray-500">
                  Your print job is ready to be collected.
                </Text>
                <Text className="text-gray-500">Code for pickup - 2456</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity>
          <View className="flex-row items-center px-2 py-4 border bg-white border-stone-50 shadow rounded-2xl">
            <View className="ml-3 space-y-1">
              <Text className="text-gray-400">Today · 10:10 AM</Text>
              <Text className="text-xl font-bold">
                Your print is in process
              </Text>
              <View>
                <Text className=" text-gray-500">
                  Your print job is in process. The shopkeeper has initiated the
                  print.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <View className="flex-row items-center px-2 py-4 border bg-white border-stone-50 shadow rounded-2xl">
          <View className="ml-3 space-y-1">
            <Text className="text-gray-400">25/04/2022 · 10:10 AM</Text>
            <Text className="text-xl font-bold">Rate your last purchase</Text>
            <View>
              <Text className=" text-gray-500">Fluid Mechanics Part 1</Text>
            </View>
            <View>
              <View className="w-[320px] h-[2px] bg-gray-300 mt-3" />
              <View className="flex-row items-center justify-between mt-2">
                <View className="flex-row space-x-1">
                  <FontAwesome name="star" size={24} color="#f9e456" />
                  <FontAwesome name="star" size={24} color="#f9e456" />
                  <FontAwesome name="star" size={24} color="#f9e456" />
                  <FontAwesome name="star" size={24} color="#f9e456" />
                  <FontAwesome name="star" size={24} color="#f9e456" />
                </View>
                <View className="bg-blue-400 px-3 py-2 rounded-xl">
                  <TouchableOpacity>
                    <Text className=" text-white text-base">Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
