import { AntDesign } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function PrintPreview() {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-between m-6">
      <View>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-1">
            <Feather name="edit" size={24} color="#3599f5" />
            <Text className="text-xl text-blue-500 font-medium">Modify</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 space-y-2">
          <Text className="text-3xl">Print preview</Text>
          <Text className="text-lg text-gray-400">
            Tap on the picture to enlarge.
          </Text>
        </View>

        {/* pdf viewer */}
        <TouchableOpacity>
          <View className="w-full h-[550px] bg-slate-300 mt-6 rounded" />
        </TouchableOpacity>
      </View>

      <View>
        <View className="flex-row items-center space-x-2 mb-4">
          <TouchableOpacity onPress={() => setSelection(!isSelected)}>
            {isSelected ? (
              <Ionicons name="checkbox-outline" size={24} color="#3599f5" />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank"
                size={24}
                color="#3599f5"
              />
            )}
          </TouchableOpacity>
          <Text className="text-blue-500 text-lg font-medium">
            I have a checked preview & have no issue
          </Text>
        </View>

        {/* Checkbox and confirm button */}
        <Link href={"./printjob"} asChild>
          <TouchableOpacity>
            <View className="flex-cols justify-center items-center w-full bg-blue-500 p-3 mb-3 rounded-xl">
              <Text className="text-xl font-semibold text-white">Confirm</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
