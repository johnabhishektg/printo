import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { View, Image } from "react-native";

function CustomDrawerContent(props: any) {
  return (
    <View className="flex-1 justify-between">
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#3599f5" }}
      >
        {/* <View className="flex-rows items-center justify-between"> */}
        <View>
          <Image
            className="w-32 h-32"
            source={require("../assets/images/profile.jpeg")}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawerContent;
