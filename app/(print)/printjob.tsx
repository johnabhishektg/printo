import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function PrintJob() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-between m-6">
      <View>
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
          <Text className="text-xl font-semibold">Print Job</Text>
        </View>

        <View className="mt-6 space-y-2">
          <Text className="text-3xl">Upload document</Text>
          <Text className="text-lg text-gray-400">
            Formats : pdf, docs, docx, rtf
          </Text>
        </View>

        <Link href="./printjob" className="mt-6" asChild>
          <TouchableOpacity>
            <View className="flex-row justify-between items-center px-2 py-4 border bg-white border-stone-50 shadow rounded-2xl">
              <View className="ml-4">
                <Text className="text-xl font-bold">Upload file</Text>
                <Text className="text-gray-400 w-64">
                  Select the file from your device.
                </Text>
              </View>
              <AntDesign name="pluscircleo" size={34} color="#3599f5" />
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="./printjob" className="mt-6" asChild>
          <TouchableOpacity>
            <View className="flex-row justify-between items-center px-2 py-4 border bg-white border-stone-50 shadow rounded-2xl">
              <View className="ml-4">
                <Text className="text-xl font-bold">Capture image</Text>
                <Text className="text-gray-400 w-64">
                  Device camera will be opened.
                </Text>
              </View>
              <AntDesign name="camerao" size={34} color="#3599f5" />
            </View>
          </TouchableOpacity>
        </Link>
      </View>

      <Link href={"./printpreview"} asChild>
        <TouchableOpacity>
          <View className="flex-cols justify-center items-center w-full bg-blue-500 p-3 mb-3 rounded-xl">
            <Text className="text-xl font-semibold text-white">
              Print Preview
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}
