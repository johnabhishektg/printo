import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function index() {
  return (
    <View className="flex-1 items-center">
      <Image
        className="items-center w-[450px] h-[400px] rounded"
        source={{ uri: "https://frigade.com/img/example1.png" }}
      />
      <View className="mt-6 space-y-2">
        <Text className="text-5xl font-bold">
          Reach your{"\n"}goals effortlessly
        </Text>
        <Text className="text-medium text-gray-400">
          Whatever happens we're there to help you get the print from campus
          without any wait time and instantly!
        </Text>
      </View>

      {/* Buttons */}
      <View className="mt-12 flex-row space-x-12">
        <View className="px-6 py-4 flex-row justify-center bg-gray-300 rounded">
          <Link href={"/onboarding"} asChild>
            <TouchableOpacity>
              <Text className="font-semibold text-base">Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="px-6 py-4 flex-row justify-center bg-primary rounded">
          <Link href={"/onboarding"} asChild>
            <TouchableOpacity>
              <Text className="text-white text-base font-semibold">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
