/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/AddressEditScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CartScreen from "../screens/CartScreen";
import Color from "../constants/Color";
import ShopMainScreen from "../screens/ShopMainScreen";
import MainPageScreen from "../screens/MainPageScreen";
import Profile from "../screens/Profile";
import AddressInfoScreen from "../screens/AddressInfoScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainMenuStack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

function RootNavigator() {
  return (
    <MainMenuStack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={screenOptions}
    >
      <MainMenuStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <MainMenuStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <MainMenuStack.Group screenOptions={{ presentation: "modal" }}>
        <MainMenuStack.Screen name="Modal" component={ModalScreen} />
      </MainMenuStack.Group>
      <MainMenuStack.Screen name="SignInScreen" component={SignInScreen} />
      <MainMenuStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <MainMenuStack.Screen name="CartScreen" component={CartScreen} />
      <MainMenuStack.Screen name="ShopMainScreen" component={ShopMainScreen} />
      <MainMenuStack.Screen name="MainPageScreen" component={MainPageScreen} />
      <MainMenuStack.Screen name="Profile" component={Profile} />
      <MainMenuStack.Screen name="AddressInfoScreen" component={AddressInfoScreen} />
    </MainMenuStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  // @ts-ignore
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Color.fontGreen,
        headerShown: false,
        tabBarLabelStyle: { fontWeight: "bold", fontSize: 12 },
        tabBarStyle: {
          backgroundColor: Color.themeColorGreen,
          height: 85,
          paddingTop: 8,
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={MainPageScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Main",
          tabBarIcon: () => (
            <Ionicons name="home" size={30} color={Color.fontGreen} />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={AddressInfoScreen}
        options={{
          title: "Message",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-processing"
              style={{ paddingTop: 5 }}
              size={30}
              color={Color.fontGreen}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={ModalScreen}
        options={{
          title: "Order",
          tabBarIcon: () => (
            <Ionicons name="document-text" size={30} color={Color.fontGreen} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={Profile}
        options={{
          title: "Me",
          tabBarIcon: () => (
            <FontAwesome name="user" size={30} color={Color.fontGreen} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
