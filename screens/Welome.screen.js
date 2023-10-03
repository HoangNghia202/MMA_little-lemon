import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native-web";
import { useColorScheme } from "react-native";
const WelcomeScreen = () => {
    const colorScheme = useColorScheme();
    console.log("colorScheme: ", colorScheme);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === "dark" ? "#333333" : "#EDEFEE",
        },
        headerText: {
            fontSize: 30,
            color: colorScheme === "dark" ? "#EDEFEE" : "#333333",
            textAlign: "center",
        },
        regularText: {
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: colorScheme === "dark" ? "#EDEFEE" : "#333333",
            textAlign: "center",
        },

        headerContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },

        image: {
            width: 100,
            height: 100,
        },
    });

    return (
        <ScrollView indicatorStyle="white" style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../assets/logo-lemon.png")}
                    style={styles.image}
                />
                <Text style={styles.headerText}>
                    {" "}
                    Little Lemon {colorScheme}
                </Text>
            </View>

            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear more about your experience
                with us!
            </Text>
        </ScrollView>
    );
};

export default WelcomeScreen;
