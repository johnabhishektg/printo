import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function componentName() {
  return (
    <View className="flex-col py-2 px-6 justify-between h-full">
      {/* Layout */}
      <View>
        <Text className="text-2xl font-semibold">Layout</Text>
        <View className="mt-4 flex-row space-x-2">
          <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-white border-white rounded-2xl shadow-md">
            <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
            <Text className="text-xl font-medium">Portrait</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-gray-100 border-white rounded-2xl shadow-md">
            <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
            <Text className="text-xl text-gray-400 font-medium">Landscape</Text>
          </TouchableOpacity>
        </View>

        {/* Paper Size */}
        <View className="mt-6">
          <Text className="text-2xl font-semibold">Paper Size</Text>
          <View className="mt-4 flex-row space-x-2">
            <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-white border-white rounded-2xl shadow-md">
              <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
              <Text className="text-xl font-medium">A4</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Margin */}
        <View className="mt-6">
          <Text className="text-2xl font-semibold">Margin</Text>
          <View className="mt-4 flex-row space-x-2">
            <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-white border-white rounded-2xl shadow-md">
              <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
              <Text className="text-xl font-medium">Default</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-gray-100 border-white rounded-2xl shadow-md">
              <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
              <Text className="text-xl text-gray-400 font-medium">Narrow</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-4 flex-row space-x-2">
            <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-gray-100 border-white rounded-2xl shadow-md">
              <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
              <Text className="text-xl font-medium">Moderate</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-2 items-center w-40 h-12 px-3 border bg-gray-100 border-white rounded-2xl shadow-md">
              <View className="w-6 h-6 border-2 rounded-full border-blue-400 items-center justify-center" />
              <Text className="text-xl font-medium">Wide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Cancel & Apply */}
      <View className="flex-row items-center justify-between mb-8">
        <TouchableOpacity>
          <View className="flex-cols justify-center items-center w-44 bg-white border border-gray-200 p-3 mb-3 rounded-xl">
            <Text className="text-xl font-semibold text-gray-400">Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-cols justify-center items-center w-44 bg-blue-500 p-3 mb-3 rounded-xl">
            <Text className="text-xl font-semibold text-white">Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
