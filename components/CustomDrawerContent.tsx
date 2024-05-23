import { Colors } from "@/constants/Colors";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, Text, TouchableOpacity } from "react-native";

function CustomDrawerContent(props: any) {
  return (
    <View style={{ backgroundColor: Colors.light.primary, flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#3599f5" }}
      >
        <View className="px-4 py-2 space-y-3">
          <View className="flex-row items-center gap-4 ">
            <Image
              className="w-16 h-16 rounded-full border border-white"
              source={require("../assets/images/profile.jpeg")}
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
      </DrawerContentScrollView>

      <View className=" py-16 px-8 space-y-2">
        <TouchableOpacity>
          <Text className="text-white text-lg">Need Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawerContent;
