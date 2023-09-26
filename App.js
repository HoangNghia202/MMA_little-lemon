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

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <View style={styles.container}>
                {/* <LittleLemonHeader /> */}
                {/* <MenuItems /> */}

                {/* <LoginScreen /> */}
                {/* <WelcomeScreen /> */}
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen
                            name="Welcome"
                            component={WelcomeScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    footerContainer: { backgroundColor: "#333333" },
});
