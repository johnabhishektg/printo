import React from "react";
import MenuButton from "@/components/MenuButton";
import {
  FontAwesome5,
  Entypo,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";

export default function HomePage() {
  return (
    <SafeAreaView className="flex-1 m-6">
      <View className="flex-row justify-between items-center">
        <MenuButton />
        <TouchableOpacity>
          <View className="p-3 flex-row justify-center border bg-white border-stone-50 shadow rounded-2xl">
            <FontAwesome5 name="bell" size={22} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* HEADER CARD */}
      <View className="w-full bg-blue-500 mt-6 p-6 rounded-2xl space-y-2">
        <View className="space-y-2">
          <Text className="text-2xl text-white font-bold">
            Print on the Go!
          </Text>
          <Text className="text-white font-sm w-72">
            Upload the document and the print will be ready by the time you
            reach the shop.
          </Text>
        </View>
        <View className="flex-row items-baseline justify-between">
          <TouchableOpacity className="flex-row items-start py-2">
            <View className="px-10 py-3 bg-white rounded">
              <Text className="font-bold text text-blue-500">Try Now</Text>
            </View>
          </TouchableOpacity>
          <Feather name="printer" size={34} color="white" />
        </View>
      </View>

      {/* Print Job Button */}
      <Link href="./printjob" className="mt-6" asChild>
        <TouchableOpacity>
          <View className="flex-row justify-between items-center p-3 border bg-white border-stone-50 shadow rounded-2xl">
            <View className="p-2">
              <Feather name="printer" size={38} color="#3599f5" />
            </View>
            <View className="ml-4">
              <Text className="text-xl font-semibold">Print Job</Text>
              <Text className="text-gray-400 w-64">
                Get printout of your document and more
              </Text>
            </View>
            <Entypo name="chevron-small-right" size={32} color="#3599f5" />
          </View>
        </TouchableOpacity>
      </Link>

      {/* Study material button */}

      <TouchableOpacity>
        <View className="mt-6 flex-row justify-between items-center p-3 border bg-white border-stone-50 shadow rounded-2xl">
          <View className="p-2">
            <FontAwesome6 name="sheet-plastic" size={32} color="#3599f5" />
          </View>
          <View className="ml-4">
            <Text className="text-xl font-semibold">Study Material</Text>
            <Text className="text-gray-400 w-64">
              Subject notes and more by seniors and teachers
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={32} color="#3599f5" />
        </View>
      </TouchableOpacity>

      <View className="mt-8 space-y-2">
        <Text className="text-lg font-semibold">How it works?</Text>
        <Text className="text-gray-500">Learn about the process</Text>
        <View className="flex-row items-center">
          <Text className="text-blue-500 font-semibold">Learn more</Text>
          <Entypo name="chevron-small-right" size={28} color="#3599f5" />
        </View>
      </View>
    </SafeAreaView>
  );
}
