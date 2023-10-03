import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import MenuItems from "./components/MenuItems";
import LoginScreen from "./screens/login.screen";
import WelcomeScreen from "./screens/Welome.screen";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();
import { Feather } from "@expo/vector-icons";
const Stack = createStackNavigator();
import { Entypo } from "@expo/vector-icons";

export default function App() {
    const colorScheme = useColorScheme();
    const commonHeaderOptions = {
        headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#EDEFEE" : "#333333", // Set the common background color for the header bar
        },
        headerTintColor: colorScheme === "light" ? "#EDEFEE" : "#333333", // Set the common text color for the header bar
    };
    return (
        <>
            <View style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Login">
                        <Tab.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{
                                tabBarLabel: "Login",
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="login"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Welcome"
                            component={WelcomeScreen}
                            options={{
                                tabBarLabel: "Welcome",
                                tabBarIcon: ({ color }) => (
                                    <Feather
                                        name="home"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>

                <View style={styles.footerContainer}>
                    <LittleLemonFooter />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#333333",
    },
    footerContainer: { backgroundColor: "#333333" },
});
