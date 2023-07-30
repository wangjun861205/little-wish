import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WishPageGroup from "./page-groups/wish";
import TaskPageGroup from "./page-groups/task";
import Login from "./pages/login";
import { QueryClientProvider, QueryClient } from "react-query";
import FamilyPageGroup from "./page-groups/family";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Wish"
        component={WishPageGroup}
        options={{ title: "愿望", headerShown: false }}
      />
      <Tab.Screen
        name="Task"
        component={TaskPageGroup}
        options={{ title: "任务", headerShown: false }}
      />
      <Tab.Screen
        name="Family"
        component={FamilyPageGroup}
        options={{ title: "家庭", headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TabScreens"
              component={TabScreens}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
